# CASINO SLOT VIETNAM V5

Bản Telegram Mini App dùng Xu ảo, không có nạp/rút tiền thật.

## Render
- Build: `npm install`
- Start: `node server/server.js`
- ENV: `NODE_ENV=production`, `BOT_TOKEN`, `WEB_APP_URL`, `PUBLIC_URL`, `ADMIN_ID`

## Telegram
Mở Mini App bằng nút trong bot. `BOT_TOKEN` được dùng để xác thực `initData` khi cấu hình production.

## Lưu ý
Các trò chơi dùng engine settlement phía server và presentation nhẹ theo từng mechanic. UI chủ động tránh canvas/particle/backdrop-filter và dùng CSS animation ngắn để phù hợp thiết bị yếu.
