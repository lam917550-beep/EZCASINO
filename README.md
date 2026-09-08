# CASINO SLOT VIETNAM — V6 ULTRA

Bản nâng cấp tập trung vào trải nghiệm Mini App nhẹ, SFX không cần mua/tải file âm thanh và animation riêng theo mechanic.

## Điểm chính

- Giữ thư mục `games/`, `assets/`, `render.yaml`, backend và các tính năng cũ.
- 100+ game module, hiện catalog gồm hơn 180 game.
- SFX tạo bằng Web Audio API ngay trên thiết bị, không cần mua/host file âm thanh.
- Nhấn nút, chọn cược, chọn cửa đều có phản hồi âm thanh nhẹ.
- Lucky Spin có vòng tròn, pointer, quay thực bằng CSS transform và có thể bấm **Hiện kết quả** sau khi server trả kết quả.
- Tài Xỉu có animation thả 3 viên xúc xắc; nút skip hiển thị kết quả ngay khi server đã trả.
- Slot, bài, đồng xu, grid, Keno/Plinko, Crash có presentation riêng.
- Không canvas, không particle system, không blur/backdrop-filter, không animation loop bằng JS.
- `prefers-reduced-motion` được hỗ trợ.
- API `/api/play` vẫn là nguồn settlement; client không tự quyết định số dư.

## Render

Build command:
```
npm install
```
Start command:
```
node server/server.js
```

Environment:
```text
NODE_ENV=production
BOT_TOKEN=TOKEN_BOTFATHER
WEB_APP_URL=https://YOUR-APP.onrender.com
PUBLIC_URL=https://YOUR-APP.onrender.com
ADMIN_ID=TELEGRAM_ID_CUA_BAN
```

## Test local

```bash
npm install
npm start
```

Mở `http://localhost:10000`.

## Lưu ý SFX

Trình duyệt/WebView có thể yêu cầu một lần tương tác của người dùng trước khi cho phép AudioContext phát tiếng. Bản này sẽ khởi tạo audio khi người dùng chạm/bấm. Nút 🔊/🔇 nằm ở thanh trên cùng.

## Dữ liệu

JSON database nằm trong `server/database/db.json`. Với dữ liệu production quan trọng, nên dùng persistent disk/database phù hợp thay vì chỉ dựa vào file local.

## An toàn

Xu chỉ là tiền ảo trong game. Không có nạp/rút tiền thật trong source này.
