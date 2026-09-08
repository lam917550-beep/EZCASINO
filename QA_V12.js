const fs=require('fs'),path=require('path');
const root=__dirname;
function countJson(f){return JSON.parse(fs.readFileSync(path.join(root,f),'utf8')).length}
function assert(c,m){if(!c)throw new Error(m)}
assert(fs.existsSync(path.join(root,'index.html')),'missing index.html');
assert(fs.existsSync(path.join(root,'styles.css')),'missing styles.css');
assert(fs.existsSync(path.join(root,'app.js')),'missing app.js');
assert(countJson('server/games.json')>=75,'games<75');
assert(countJson('server/pets.json')===100,'pets!=100');
assert(fs.readFileSync(path.join(root,'FEATURES_1000.md'),'utf8').split('\n').filter(x=>/^\d+\./.test(x.trim())).length>=1000,'features<1000');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const id of ['avatar','name','balance','level','vip','petBonus','nav','view','modal-root','toast','audio','theme'])assert(html.includes(`id="${id}"`),`DOM id missing ${id}`);
const app=fs.readFileSync(path.join(root,'app.js'),'utf8');
for(const s of ['/api/bootstrap','/api/play','/api/profile/setup','/api/web/login','/api/web/register','/api/bank','/api/pets/buy','/api/pets/sell'])assert(app.includes(s),`frontend endpoint missing ${s}`);
console.log('static-ok');
