# CASINO SLOT VIETNAM — V9 ULTRA SMOOTH

Bản tối ưu ưu tiên thiết bị yếu: 75 game hiển thị trong Mini App, nhưng giữ các module game cũ trong repository để compatibility. Không nạp/rút tiền thật.

## Render
Build: `npm install`
Start: `node server/server.js`

ENV:
- `NODE_ENV=production`
- `BOT_TOKEN=...`
- `WEB_APP_URL=https://TEN-APP.onrender.com`
- `PUBLIC_URL=https://TEN-APP.onrender.com`
- `ADMIN_ID=TELEGRAM_ID_ADMIN`

## Tính năng V9
- 75 game curated, server settlement.
- Tỷ lệ thắng dài hạn 42% theo từng game.
- Trong 42% thắng: mốc x2 chiếm 7% tổng lượt, còn x1.5 chiếm 35%; x2 thấp hơn x1.5.
- Cược tối đa 75% số dư, trần 1.000.000 Xu.
- Đăng nhập theo tháng: thưởng Xu hằng ngày, mốc tháng nhận pet.
- Ngân hàng: lãi kép 10%/ngày; chỉ rút sau ít nhất 7 ngày.
- 100 pet, giá tăng dần; pet tăng XP và Xu, không tăng tỷ lệ thắng.
- Mỗi pet shop mua 1 lần; vật phẩm daily mua 1 lần/ngày.
- Bán pet nhận 40% giá mua.
- XP cho cả thắng/thua; ngưỡng XP tăng theo level; level-up có Xu và pet phần thưởng.
- BXH giàu, streak, XP, thắng tuần.
- `/petsid` chỉ ADMIN để xem 100 ID pet.
- `/ownerhelp` chỉ ADMIN.
- `/start` trả nút mở Mini App.
- SFX nhẹ bằng Web Audio; không cần file âm thanh trả phí.
- Không canvas/particle/requestAnimationFrame/scroll animation nặng.

## Lưu ý
Không có cách bảo đảm 0 lag tuyệt đối trên mọi thiết bị vì Telegram WebView/phần cứng khác nhau. Source này loại bỏ các hoạt động render liên tục nặng nhất và giảm DOM ban đầu.
