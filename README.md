# CASINO SLOT VIETNAM V8 - ULTRA LAG FIX — LAG FIX

Bản tối ưu WebView máy yếu, giữ game/modules cũ và bổ sung pet/đổi tên.

## Render
Build: `npm install`
Start: `node server/server.js`

Environment:
- `NODE_ENV=production`
- `BOT_TOKEN=<token BotFather>`
- `WEB_APP_URL=https://TEN-APP.onrender.com`
- `PUBLIC_URL=https://TEN-APP.onrender.com`
- `ADMIN_ID=<Telegram numeric ID>`

## Điểm chính
- Cược tối đa 75% số dư, tối đa 1.000.000 Xu.
- Người mới được đặt tên lần đầu miễn phí; đổi tên sau đó phí 5.000 Xu.
- 100 pet, mỗi pet có ID nội bộ, giá tăng dần; ID không hiện trong Mini App.
- Pet chỉ ảnh hưởng XP và Xu nhận được, không ảnh hưởng xác suất thắng.
- Pet mua 1 lần; pet không active có thể bán và nhận 40% giá mua.
- Animation game nhẹ: Lucky Spin có bánh xe + mũi tên; Tài Xỉu có xúc xắc rơi; Slot có reel; bài/coin/grid/keno/plinko/crash có presentation riêng.
- SFX tạo trực tiếp bằng Web Audio API, không cần mua/tải asset âm thanh.
- Có thể bấm “Hiện kết quả” để bỏ qua animation.
- Danh sách game chỉ render 24 mục/lần để giảm lag khi cuộn; có tìm kiếm và Hiện thêm.
- Không dùng canvas, particle system, backdrop-filter hoặc animation loop JS cho gameplay.

## Kiểm tra
Source đã được quét 5 vòng: syntax, cấu trúc, DOM/API, logic game/pet và ZIP integrity.
