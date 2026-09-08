# CASINO SLOT VIETNAM v2

Bản Telegram Mini App nâng cấp với 120 game module, bot `/start`, backend settlement, daily streak, level/XP/VIP, Top 100, realtime SSE, Web Audio SFX, CSS/Web Animations và 10.240 feature hooks / 500 achievements.

## Render
Build Command:
```
npm install
```
Start Command:
```
node server/server.js
```
Environment Variables:
```text
NODE_ENV=production
BOT_TOKEN=<token BotFather>
WEB_APP_URL=https://YOUR-SERVICE.onrender.com
PUBLIC_URL=https://YOUR-SERVICE.onrender.com
ADMIN_KEY=<optional secret>
```
Khi server khởi động với `BOT_TOKEN` + `PUBLIC_URL`, nó tự gọi Telegram `setWebhook`. Khi user nhắn `/start`, bot gửi nút **🎰 MỞ CASINO** mở Mini App.

## Test
```
npm install
npm run check
node --check app.js
```
Kiểm tra `GET /health`.

## Ghi chú
Đây chỉ là game giải trí dùng Xu ảo, không có nạp/rút tiền thật. `featureCatalog.json` là 10.240 feature hooks/flags để quản lý/mở rộng; không phải 10.240 game loop khác nhau.
