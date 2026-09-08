const express=require('express');
const crypto=require('crypto');
const fs=require('fs');
const path=require('path');
const app=express();
app.disable('x-powered-by');
app.use(express.json({limit:'96kb'}));
app.use((req,res,next)=>{
  if(req.path==='/'||req.path.endsWith('.html'))res.setHeader('Cache-Control','no-store');
  else if(/\.(?:js|css)$/.test(req.path))res.setHeader('Cache-Control','public,max-age=31536000,immutable');
  next();
});
const ROOT=path.join(__dirname,'..');
const DB_PATH=path.join(__dirname,'database','db.json');
const PORT=Number(process.env.PORT||10000);
const BOT_TOKEN=String(process.env.BOT_TOKEN||'');
const WEB_APP_URL=String(process.env.WEB_APP_URL||process.env.PUBLIC_URL||'').replace(/\/$/,'');
const PUBLIC_URL=String(process.env.PUBLIC_URL||WEB_APP_URL).replace(/\/$/,'');
const ADMIN_ID=String(process.env.ADMIN_ID||'');
let db={players:{},history:[],chat:[],giftcodes:{},blocked:{},noticeLog:[]};
try{Object.assign(db,JSON.parse(fs.readFileSync(DB_PATH,'utf8')))}catch{}
for(const [k,v] of Object.entries({players:{},history:[],chat:[],giftcodes:{},blocked:{},noticeLog:[]}))if(!db[k])db[k]=v;
let saveTimer=null,saveRunning=false,dirty=false;
const clients=new Set(),seen=new Map(),sessions=new Map();
let maintenance=false;
function save(){dirty=true;if(saveTimer||saveRunning)return;saveTimer=setTimeout(flush,50)}
async function flush(){saveTimer=null;if(!dirty||saveRunning)return;dirty=false;saveRunning=true;const tmp=DB_PATH+'.tmp';try{await fs.promises.writeFile(tmp,JSON.stringify(db),'utf8');await fs.promises.rename(tmp,DB_PATH)}catch(e){console.error('DB save',e.message);dirty=true}finally{saveRunning=false;if(dirty&&!saveTimer)saveTimer=setTimeout(flush,50)}}
function broadcast(event,payload){const msg=`event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;for(const res of clients){try{res.write(msg)}catch{clients.delete(res)}}}
function day(){return new Date().toISOString().slice(0,10)} function month(){return new Date().toISOString().slice(0,7)}
function xpNeeded(level){return 150+(Math.max(0,level-1)*125)+Math.floor(Math.pow(Math.max(0,level-1),1.25)*25)}
function monthlyReward(streak){
  const base=streak<=5?100*streak:streak<=15?500*streak:streak<=25?1500*streak:5000*streak;
  const pet=[7,14,21,28,30,31].includes(streak)?`PET${Math.min(100,70+Math.floor(streak/7))}`:null;
  return {xu:base,pet};
}
function ensure(u){
  if(!u||u.id===undefined||u.id===null)throw Error('Thiếu Telegram ID.');
  const id=String(u.id);let p=db.players[id];
  if(!p){p={id,name:'Người chơi',username:String(u.username||'').slice(0,60),photo_url:String(u.photo_url||''),balance:100000,level:1,xp:0,vip:0,vipPoints:0,currentStreak:0,bestStreak:0,lastLogin:null,loginMonth:null,monthlyStreak:0,monthlyMonth:null,totalPlays:0,totalWins:0,totalWinXu:0,totalLossXu:0,weeklyWins:0,freeSpins:0,inventory:{},pets:{},activePet:null,needsName:true,gameStats:{},friends:0,bank:{principal:0,lastDepositAt:null,lastInterestAt:null},dailyShop:{},createdAt:Date.now()};db.players[id]=p;save()}
  // Preserve existing Telegram first name only as a fallback, but force a custom name UI for first entry.
  if(p.needsName===undefined)p.needsName=!p.name||p.name==='Người chơi';
  const today=day(),mon=month();
  if(p.lastLogin!==today){
    const last=p.lastLogin?new Date(p.lastLogin+'T00:00:00Z'):null;const now=new Date(today+'T00:00:00Z');
    const gap=last?Math.round((now-last)/86400000):999;
    p.currentStreak=gap===1?p.currentStreak+1:1;
    p.bestStreak=Math.max(p.bestStreak,p.currentStreak);
    if(p.monthlyMonth!==mon){p.monthlyMonth=mon;p.monthlyStreak=1}else p.monthlyStreak=gap===1?p.monthlyStreak+1:1;
    p.loginMonth=mon;p.lastLogin=today;
    const r=monthlyReward(p.monthlyStreak);p.balance+=r.xu;
    if(r.pet){p.pets[r.pet]=(p.pets[r.pet]||0)+1}
    p._reward={...r,day:p.monthlyStreak};save();
  }
  applyBankInterest(p);
  return p;
}
function applyBankInterest(p){
  if(!p.bank||!p.bank.principal)return;
  if(!p.bank.lastInterestAt)p.bank.lastInterestAt=p.bank.lastDepositAt||Date.now();
  const now=Date.now();const full=Math.floor((now-p.bank.lastInterestAt)/86400000);
  if(full<=0)return;
  p.bank.principal=Math.floor(p.bank.principal*Math.pow(1.10,full));
  p.bank.lastInterestAt+=full*86400000;save();
}
function safe(p){const q=JSON.parse(JSON.stringify(p));delete q._reward;return q}
const defs=JSON.parse(fs.readFileSync(path.join(__dirname,'games.json'),'utf8'));
const GAME_MAP=new Map(defs.map(g=>[g.id,g]));
const PETS=JSON.parse(fs.readFileSync(path.join(__dirname,'pets.json'),'utf8'));
const PET_MAP=new Map(PETS.map(p=>[p.id,p]));
const SHOP={
  lucky_ticket:{name:'Vé Lucky Spin',price:2500,once:false,daily:true},
  double_xp:{name:'Thẻ Nhân Đôi XP',price:5000,once:true},
  pet_food:{name:'Thức Ăn Pet',price:1200,once:false,daily:true},
  gold_frame:{name:'Khung Hồ Sơ Vàng',price:9000,once:true},
  sound_pack:{name:'Gói Âm Thanh',price:7000,once:true}
};
const RENAME_FEE=5000;
function maxBet(b){return Math.min(1000000,Math.floor(Number(b||0)*.75))}
function petBonus(p){const x=PET_MAP.get(p.activePet);return x||{xpPct:0,moneyPct:0}}
function winGate(p,g){
  const st=p.gameStats[g.id]||{plays:0,wins:0};const n=st.plays+1;
  return Math.floor(0.42*n)>Math.floor(0.42*(n-1));
}
function premiumGate(p,g){
  const st=p.gameStats[g.id]||{plays:0,wins:0};const n=st.plays+1;
  const winsSoFar=Math.floor(0.42*n);
  return winsSoFar>0 && Math.floor((1/6)*winsSoFar)>Math.floor((1/6)*Math.max(0,winsSoFar-1));
}
function multiplierFor(p,g,win){if(!win)return 0;return premiumGate(p,g)?2:1.5}
function rand(n){return crypto.randomInt(0,n)}
function displayFor(g){
  const seed=rand(1000000000),m=g.mechanic;let d={mechanic:m,values:[]};
  if(m==='dice'){const a=1+seed%6,b=1+Math.floor(seed/7)%6,c=1+Math.floor(seed/49)%6;d.values=[a,b,c];d.sum=a+b+c}
  else if(m==='reels'){const s=['🍒','🍋','🔔','💎','⭐','7️⃣','🐉'];d.values=[s[seed%s.length],s[Math.floor(seed/17)%s.length],s[Math.floor(seed/97)%s.length]]}
  else if(m==='wheel')d.value=['1x','1.5x','2x','3x','5x','⭐','💎'][seed%7]
  else if(m==='coin')d.value=seed%2?'MẶT NGỬA':'MẶT SẤP'
  else if(['cards','poker','baccarat'].includes(m)){const r=['A','2','3','4','5','6','7','8','9','10','J','Q','K'],s=['♠','♥','♦','♣'];d.values=[0,1,2].map(i=>r[(Math.floor(seed/(i+1)))%r.length]+s[(Math.floor(seed/(i+3)))%s.length])}
  else if(m==='keno'||m==='plinko')d.values=Array.from({length:8},(_,i)=>1+((Math.floor(seed/(i+1))+i*11)%45))
  else if(m==='grid'||m==='mines')d.hit=1+(seed%25)
  else if(m==='crash')d.value=(1.2+(seed%600)/100).toFixed(2)+'x'
  else d.value=1+(seed%99);
  return d;
}
function newSession(user){const token=crypto.randomBytes(24).toString('hex');sessions.set(token,{id:String(user.id),created:Date.now()});return token}
function sessionUser(req){const token=req.get('X-App-Session')||req.body?.session||req.query?.session||'';const s=sessions.get(String(token));if(!s)throw Error('Phiên không hợp lệ. Hãy mở lại Mini App.');if(Date.now()-s.created>86400000){sessions.delete(token);throw Error('Phiên đã hết hạn.')}if(db.blocked[s.id])throw Error('Tài khoản đang bị khóa.');const p=db.players[s.id];if(!p)throw Error('Người chơi không tồn tại.');applyBankInterest(p);return p}
function tgVerify(initData){if(!BOT_TOKEN||!initData)return false;try{const p=new URLSearchParams(initData),hash=p.get('hash');if(!hash)return false;p.delete('hash');const dc=[...p.entries()].sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>`${k}=${v}`).join('\n');const key=crypto.createHmac('sha256','WebAppData').update(BOT_TOKEN).digest();const exp=crypto.createHmac('sha256',key).update(dc).digest('hex');return exp===hash}catch{return false}}
function requestUser(req){const init=req.body?.initData||req.get('X-Telegram-Init-Data')||'';if(BOT_TOKEN){if(!tgVerify(init))throw Error('Xác thực Telegram thất bại. Hãy mở Mini App từ bot.');const raw=new URLSearchParams(init).get('user');const u=raw?JSON.parse(raw):null;if(!u?.id)throw Error('Thiếu Telegram ID.');return u}const u=req.body?.telegramUser;if(u?.id)return u;throw Error('Thiếu Telegram ID.')}
function auth(req){return sessionUser(req)}
function adminId(){return ADMIN_ID}
app.get('/health',(req,res)=>res.json({ok:true,service:'casino-slot-vietnam-v9',gameCount:defs.length}));
app.post('/api/bootstrap',(req,res)=>{try{const u=requestUser(req),p=ensure(u),session=newSession(u),r=p._reward||null;delete p._reward;res.json({ok:true,session,player:safe(p),loginReward:r,gameCount:defs.length,pets:PETS.map(p=>({id:p.id,name:p.name,emoji:p.emoji,price:p.price,xpPct:p.xpPct,moneyPct:p.moneyPct,tier:p.tier,shop:p.shop})),shop:SHOP,bank:p.bank,xpNeeded:xpNeeded(p.level)})}catch(e){res.status(401).json({error:e.message})}});
app.post('/api/play',(req,res)=>{try{if(maintenance)throw Error('Hệ thống đang bảo trì.');const p=auth(req),g=GAME_MAP.get(String(req.body.gameId||''));if(!g)throw Error('Game không tồn tại.');const bet=Math.floor(Number(req.body.bet)),max=maxBet(p.balance);if(!Number.isSafeInteger(bet)||bet<100||bet>max)throw Error(`Cược hợp lệ: 100–${max.toLocaleString('vi-VN')} Xu`);if(p.balance<bet)throw Error('Không đủ Xu.');const rid=String(req.body.requestId||'');if(rid&&seen.has(rid))throw Error('Lượt chơi đã được xử lý.');if(rid)seen.set(rid,Date.now());for(const [k,t] of seen)if(Date.now()-t>120000)seen.delete(k);
 const win=winGate(p,g),mult=multiplierFor(p,g,win),display=displayFor(g);const pb=petBonus(p);p.balance-=bet;p.totalPlays++;p.vipPoints+=Math.max(1,Math.floor(bet/100));
 let xpGain=Math.max(5,12+Math.floor(bet/1000));if(win)xpGain+=8;xpGain=Math.floor(xpGain*(1+pb.xpPct/100));p.xp+=xpGain;
 const gs=p.gameStats[g.id]||{plays:0,wins:0};gs.plays++;if(win)gs.wins++;p.gameStats[g.id]=gs;
 if(win){let profit=Math.floor(bet*mult*(1+pb.moneyPct/100));p.balance+=bet+profit;p.totalWins++;p.totalWinXu+=profit;p.weeklyWins++;if(mult===2)broadcast('big_win',{name:p.name,game:g.name,profit});}
 else p.totalLossXu+=bet;
 let levels=[];while(p.xp>=xpNeeded(p.level)){p.xp-=xpNeeded(p.level);p.level++;const levelPet=PETS.find(x=>x.id===`PET${80+Math.min(20,p.level)}`);let rewardXu=Math.min(50000,p.level*750);p.balance+=rewardXu;levels.push({level:p.level,xu:rewardXu,pet:levelPet?.id||null});if(levelPet)p.pets[levelPet.id]=(p.pets[levelPet.id]||0)+1}
 p.vip=Math.min(20,Math.floor(p.vipPoints/1000));db.history.unshift({id:crypto.randomUUID(),userId:p.id,gameId:g.id,gameName:g.name,bet,result:win?'win':'lose',multiplier:mult,xpGain,time:Date.now()});if(db.history.length>12000)db.history.length=12000;save();broadcast('player_update',{id:p.id,balance:p.balance,level:p.level,xp:p.xp});res.json({ok:true,player:safe(p),result:{win,multiplier:mult,display,xpGain,levelUps:levels}})
}catch(e){res.status(400).json({error:e.message})}});
app.get('/api/history',(req,res)=>res.json(db.history.filter(x=>String(x.userId)===String(req.query.id||'')).slice(0,80)));
app.get('/api/rankings',(req,res)=>{const ps=Object.values(db.players);res.json({richest:ps.slice().sort((a,b)=>b.balance-a.balance).slice(0,100).map((p,i)=>({rank:i+1,name:p.name,balance:p.balance})),streak:ps.slice().sort((a,b)=>b.bestStreak-a.bestStreak).slice(0,100).map((p,i)=>({rank:i+1,name:p.name,streak:p.bestStreak})),xp:ps.slice().sort((a,b)=>(b.level-a.level)||(b.xp-a.xp)).slice(0,100).map((p,i)=>({rank:i+1,name:p.name,level:p.level,xp:p.xp,totalXp:(p.level*100000)+p.xp})),weekly:ps.slice().sort((a,b)=>b.weeklyWins-a.weeklyWins).slice(0,100).map((p,i)=>({rank:i+1,name:p.name,wins:p.weeklyWins}))})});
app.get('/api/events',(req,res)=>{res.setHeader('Content-Type','text/event-stream');res.setHeader('Cache-Control','no-cache,no-transform');res.setHeader('Connection','keep-alive');res.setHeader('X-Accel-Buffering','no');res.write(`event: ping\ndata: ${Date.now()}\n\n`);clients.add(res);req.on('close',()=>clients.delete(res))});
app.post('/api/profile/name',(req,res)=>{try{const p=auth(req),name=String(req.body.name||'').trim().slice(0,40);if(!/^[\p{L}0-9 _.-]{2,40}$/u.test(name))throw Error('Tên cần 2–40 ký tự.');const first=String(req.body.first||'')==='true';let fee=0;if(!p.needsName||!first){fee=RENAME_FEE;if(p.balance<fee)throw Error(`Đổi tên cần ${RENAME_FEE.toLocaleString('vi-VN')} Xu.`);p.balance-=fee}p.name=name;p.needsName=false;save();res.json({ok:true,fee,player:safe(p)})}catch(e){res.status(400).json({error:e.message})}});
app.get('/api/pets',(req,res)=>res.json({pets:PETS}));
app.post('/api/pets/buy',(req,res)=>{try{const p=auth(req),id=String(req.body.petId||''),pet=PET_MAP.get(id);if(!pet||!pet.shop)throw Error('Pet không bán trong cửa hàng.');if(p.pets[id])throw Error('Pet này chỉ mua 1 lần.');if(p.balance<pet.price)throw Error('Không đủ Xu.');p.balance-=pet.price;p.pets[id]=1;if(!p.activePet)p.activePet=id;save();res.json({ok:true,player:safe(p)})}catch(e){res.status(400).json({error:e.message})}});
app.post('/api/pets/equip',(req,res)=>{try{const p=auth(req),id=String(req.body.petId||'');if(!p.pets?.[id])throw Error('Bạn chưa sở hữu pet.');if(!PET_MAP.has(id))throw Error('Pet không tồn tại.');p.activePet=id;save();res.json({ok:true,player:safe(p)})}catch(e){res.status(400).json({error:e.message})}});
app.post('/api/pets/sell',(req,res)=>{try{const p=auth(req),id=String(req.body.petId||''),pet=PET_MAP.get(id);if(!pet||!p.pets?.[id])throw Error('Pet không tồn tại hoặc chưa sở hữu.');if(p.activePet===id)throw Error('Trang bị pet khác trước khi bán.');delete p.pets[id];const refund=Math.floor(pet.price*.4);p.balance+=refund;save();res.json({ok:true,refund,player:safe(p)})}catch(e){res.status(400).json({error:e.message})}});
app.get('/api/bank',(req,res)=>{try{const p=auth(req);applyBankInterest(p);const now=Date.now(),dep=p.bank?.lastDepositAt||null,days=dep?Math.floor((now-dep)/86400000):0;res.json({bank:{...p.bank,daysLocked:days,payout:p.bank?.principal||0,withdrawReady:days>=7}})}catch(e){res.status(400).json({error:e.message})}});
app.post('/api/bank/deposit',(req,res)=>{try{const p=auth(req);applyBankInterest(p);const amount=Math.floor(Number(req.body.amount));if(!Number.isSafeInteger(amount)||amount<100)throw Error('Số tiền gửi tối thiểu 100 Xu.');if(p.bank.principal>0)throw Error('Tài khoản ngân hàng đang có khoản gửi. Rút khoản hiện tại trước.');if(p.balance<amount)throw Error('Không đủ Xu.');p.balance-=amount;p.bank={principal:amount,lastDepositAt:Date.now(),lastInterestAt:Date.now()};save();res.json({ok:true,player:safe(p),bank:p.bank})}catch(e){res.status(400).json({error:e.message})}});
app.post('/api/bank/withdraw',(req,res)=>{try{const p=auth(req);applyBankInterest(p);if(!p.bank.principal)throw Error('Chưa có tiền gửi.');const days=Math.floor((Date.now()-p.bank.lastDepositAt)/86400000);if(days<7)throw Error(`Còn ${7-days} ngày nữa mới được rút.`);const payout=p.bank.principal;p.balance+=payout;p.bank={principal:0,lastDepositAt:null,lastInterestAt:null};save();res.json({ok:true,payout,player:safe(p)})}catch(e){res.status(400).json({error:e.message})}});
app.post('/api/shop/buy',(req,res)=>{try{const p=auth(req),id=String(req.body.item||''),item=SHOP[id];if(!item)throw Error('Vật phẩm không tồn tại.');const today=day();if(item.once&&p.inventory[id])throw Error('Vật phẩm này chỉ mua 1 lần.');if(item.daily&&p.dailyShop[id]===today)throw Error('Vật phẩm này hôm nay đã mua.');if(p.balance<item.price)throw Error('Không đủ Xu.');p.balance-=item.price;p.inventory[id]=(p.inventory[id]||0)+1;if(item.daily)p.dailyShop[id]=today;save();res.json({ok:true,player:safe(p),item})}catch(e){res.status(400).json({error:e.message})}});
app.post('/api/giftcode/redeem',(req,res)=>{try{const p=auth(req),code=String(req.body.code||'').trim().toUpperCase(),g=db.giftcodes[code];if(!g)throw Error('Giftcode không tồn tại.');if(g.usedBy)throw Error('Giftcode đã được sử dụng.');p.balance+=g.xu;if(g.pet&&PET_MAP.has(g.pet))p.pets[g.pet]=(p.pets[g.pet]||0)+1;g.usedBy=p.id;g.usedAt=Date.now();save();res.json({ok:true,player:safe(p),pet:g.pet||null})}catch(e){res.status(400).json({error:e.message})}});
app.post('/api/chat',(req,res)=>{try{const p=auth(req),text=String(req.body.text||'').trim();if(!text||text.length>300)throw Error('Tin nhắn không hợp lệ.');const msg={id:crypto.randomUUID(),userId:p.id,name:p.name,text,time:Date.now()};db.chat.push(msg);if(db.chat.length>1000)db.chat.shift();save();broadcast('chat_message',msg);res.json(msg)}catch(e){res.status(400).json({error:e.message})}});
function isAdmin(id){return Boolean(ADMIN_ID&&String(id)===ADMIN_ID)}
function adminUser(req){const token=req.get('X-App-Session')||req.body?.session, s=sessions.get(String(token));if(s&&isAdmin(s.id))return db.players[s.id];const u=requestUser(req);if(!isAdmin(u.id))throw Error('Không có quyền ADMIN.');return ensure(u)}
async function tg(method,body){if(!BOT_TOKEN)return null;const r=await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(body)});return r.json()}
function botButtons(){return{inline_keyboard:[[WEB_APP_URL?{text:'🎰 MỞ CASINO',web_app:{url:WEB_APP_URL}}:{text:'🎰 CASINO',callback_data:'no_url'}],[{text:'🎁 Giftcode',callback_data:'gift_help'}]]}}
function webhookResponse(text,chatId,markup){return{method:'sendMessage',chat_id:chatId,text,reply_markup:markup||botButtons()}}
function ownerHelp(){return`🛡️ LỆNH ADMIN\n\n/thongbao <nội dung> — broadcast tới người dùng.\n/taogiftcode <CODE> <XU> [PET_ID] — tạo giftcode.\n/gift <ID> <XU|pet:PET_ID> — tặng Xu/pet.\n/setxu <ID> <XU> — đặt số dư.\n/setvip <ID> <0-20> — đặt VIP.\n/setlevel <ID> <level> — đặt cấp.\n/addpet <ID> <PET_ID> [SL] — thêm pet.\n/removepet <ID> <PET_ID> [SL] — xóa pet.\n/petsid — danh sách toàn bộ 100 PET ID.\n/block <ID> — khóa.\n/unblock <ID> — mở khóa.\n/resetstreak <ID> — reset streak.\n/stats — thống kê server.\n/maintenance <on|off> — bảo trì.\n/ownerhelp — xem lệnh admin.`}
function parseBotCommand(text){const p=String(text||'').trim().split(/\s+/),first=(p.shift()||'').split('@')[0].toLowerCase();return{cmd:first,parts:p}}
async function botUpdate(update){const m=update?.message;if(!m)return null;const chatId=m.chat?.id,from=String(m.from?.id||''),text=String(m.text||'').trim(),{cmd,parts}=parseBotCommand(text);if(cmd==='/start')return webhookResponse(`🎰 CASINO SLOT VIETNAM\n\nChào mừng ${m.from?.first_name||'bạn'}! Nhấn nút dưới để mở Mini App.\n\nXu ảo · chơi giải trí · không nạp/rút tiền thật.\n\n👑 Chủ bot: @itznvl`,chatId,botButtons());if(cmd==='/ownerhelp')return isAdmin(from)?webhookResponse(ownerHelp(),chatId,{remove_keyboard:true}):webhookResponse('Lệnh không khả dụng.',chatId);if(!isAdmin(from))return null;
if(cmd==='/petsid')return webhookResponse(`🐾 100 PET ID\n\n${PETS.map(p=>`${p.id} — ${p.name} · ${p.price.toLocaleString('vi-VN')} Xu`).join('\n')}`,chatId,{remove_keyboard:true});
if(cmd==='/thongbao'){const msg=text.slice(text.toLowerCase().indexOf('/thongbao')+9).trim();if(!msg)return webhookResponse('Dùng: /thongbao nội dung',chatId);for(const id of Object.keys(db.players))tg('sendMessage',{chat_id:id,text:`📢 THÔNG BÁO\n\n${msg}`}).catch(()=>{});db.noticeLog.push({admin:from,text:msg,time:Date.now()});save();return webhookResponse('✅ Đã gửi thông báo.',chatId)}
if(cmd==='/taogiftcode'){const code=(parts[0]||'').toUpperCase().replace(/[^A-Z0-9_-]/g,'');const xu=Number(parts[1]);const pet=parts[2]?String(parts[2]).toUpperCase():null;if(!code||!Number.isSafeInteger(xu)||xu<=0)return webhookResponse('Dùng: /taogiftcode CODE XU [PET_ID]',chatId);if(pet&&!PET_MAP.has(pet))return webhookResponse('PET_ID không tồn tại.',chatId);if(db.giftcodes[code])return webhookResponse('Giftcode đã tồn tại.',chatId);db.giftcodes[code]={code,xu,pet,usedBy:null,createdBy:from,createdAt:Date.now()};save();for(const id of Object.keys(db.players))tg('sendMessage',{chat_id:id,text:`🎁 GIFT CODE MỚI\n\n${code}\n\nNhập code trong Mini App để nhận quà!`}).catch(()=>{});return webhookResponse('✅ Đã tạo và thông báo giftcode.',chatId)}
if(cmd==='/gift'){const id=String(parts[0]||''),thing=String(parts[1]||''),p=db.players[id];if(!p)return webhookResponse('Không tìm thấy ID.',chatId);if(thing.startsWith('pet:')){const pet=thing.slice(4).toUpperCase();if(!PET_MAP.has(pet))return webhookResponse('PET_ID không tồn tại.',chatId);p.pets[pet]=(p.pets[pet]||0)+1;save();tg('sendMessage',{chat_id:id,text:`🐾 Bạn vừa nhận pet từ ADMIN.`}).catch(()=>{});return webhookResponse('✅ Đã tặng pet.',chatId)}const n=Number(thing);if(!Number.isSafeInteger(n)||n<=0)return webhookResponse('Dùng /gift ID XU hoặc /gift ID pet:PET_ID',chatId);p.balance+=n;save();tg('sendMessage',{chat_id:id,text:`🎁 Bạn vừa nhận ${n.toLocaleString('vi-VN')} Xu từ ADMIN.`}).catch(()=>{});return webhookResponse('✅ Đã tặng Xu.',chatId)}
if(cmd==='/setxu'){const p=db.players[String(parts[0]||'')],n=Number(parts[1]);if(!p||!Number.isSafeInteger(n)||n<0)return webhookResponse('Dùng: /setxu ID XU',chatId);p.balance=n;save();return webhookResponse('✅ Đã đặt số dư.',chatId)}
if(cmd==='/setvip'){const p=db.players[String(parts[0]||'')],n=Number(parts[1]);if(!p||!Number.isInteger(n)||n<0||n>20)return webhookResponse('Dùng: /setvip ID 0-20',chatId);p.vip=n;save();return webhookResponse('✅ Đã đặt VIP.',chatId)}
if(cmd==='/setlevel'){const p=db.players[String(parts[0]||'')],n=Number(parts[1]);if(!p||!Number.isInteger(n)||n<1)return webhookResponse('Dùng: /setlevel ID level',chatId);p.level=n;p.xp=0;save();return webhookResponse('✅ Đã đặt cấp.',chatId)}
if(cmd==='/addpet'||cmd==='/removepet'){const p=db.players[String(parts[0]||'')],pet=String(parts[1]||'').toUpperCase(),n=Math.max(1,Number(parts[2]||1));if(!p||!PET_MAP.has(pet)||!Number.isSafeInteger(n))return webhookResponse(`Dùng: ${cmd} ID PET_ID [SL]`,chatId);p.pets[pet]=(p.pets[pet]||0)+(cmd==='/addpet'?n:-n);if(p.pets[pet]<=0)delete p.pets[pet];save();return webhookResponse('✅ Đã cập nhật pet.',chatId)}
if(cmd==='/block'||cmd==='/unblock'){const id=String(parts[0]||'');if(!db.players[id])return webhookResponse('Không tìm thấy ID.',chatId);if(cmd==='/block')db.blocked[id]={at:Date.now(),by:from};else delete db.blocked[id];save();return webhookResponse('✅ Đã cập nhật trạng thái.',chatId)}
if(cmd==='/resetstreak'){const p=db.players[String(parts[0]||'')];if(!p)return webhookResponse('Không tìm thấy ID.',chatId);p.currentStreak=0;p.monthlyStreak=0;save();return webhookResponse('✅ Đã reset streak.',chatId)}
if(cmd==='/stats'){const ps=Object.values(db.players);return webhookResponse(`📊 SERVER\nNgười chơi: ${ps.length}\nGame: ${defs.length}\nLịch sử: ${db.history.length}\nGiftcode: ${Object.keys(db.giftcodes).length}\nChat: ${db.chat.length}`,chatId)}
if(cmd==='/maintenance'){const v=(parts[0]||'').toLowerCase();if(!['on','off'].includes(v))return webhookResponse('Dùng: /maintenance on|off',chatId);maintenance=v==='on';return webhookResponse(`✅ Bảo trì: ${maintenance?'BẬT':'TẮT'}.`,chatId)}
return webhookResponse('Lệnh ADMIN không hợp lệ. Dùng /ownerhelp.',chatId)}
app.post('/telegram/webhook',async(req,res)=>{try{if(req.body?.callback_query){if(req.body.callback_query.data==='gift_help')return res.status(200).json({method:'answerCallbackQuery',callback_query_id:req.body.callback_query.id,text:'Mở Mini App để nhập giftcode.'});return res.sendStatus(200)}const out=await botUpdate(req.body);return out?res.status(200).json(out):res.sendStatus(200)}catch(e){console.error('Webhook',e.message);return res.sendStatus(200)}});
app.post('/api/admin/set-webhook',async(req,res)=>{try{adminUser(req);const base=String(req.body.url||PUBLIC_URL).replace(/\/$/,'');if(!base)throw Error('Thiếu URL.');res.json(await tg('setWebhook',{url:base+'/telegram/webhook',allowed_updates:['message','callback_query']}))}catch(e){res.status(403).json({error:e.message})}});
app.use(express.static(ROOT));
(async()=>{if(BOT_TOKEN&&PUBLIC_URL){try{const r=await tg('setWebhook',{url:PUBLIC_URL+'/telegram/webhook',allowed_updates:['message','callback_query']});console.log('Telegram webhook',r?.ok?'OK':'FAILED')}catch(e){console.error('Webhook setup',e.message)}}})();
app.listen(PORT,'0.0.0.0',()=>console.log(`CASINO SLOT VIETNAM V9 on ${PORT}`));
