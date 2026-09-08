# CASINO SLOT VIETNAM

Telegram Mini App game giải trí bằng Xu ảo. Không có nạp/rút tiền thật.

## Cấu trúc
- `index.html`, `styles.css`, `app.js`: giao diện Mini App.
- `games/`: 100+ module game riêng biệt + `index.js`.
- `server/server.js`: Express API, settlement, leaderboard, SSE.
- `server/database/db.json`: dữ liệu JSON.
- `server/achievements.json`: 500 thành tựu.
- `server/featureCatalog.json`: 10.240 mục catalog/micro-feature để mở rộng.

## Chạy local
Yêu cầu Node.js 18+.

```bash
npm install
node server/server.js
```
Mở `http://localhost:10000`.

## Deploy Render
1. Tạo tài khoản Render.
2. Đẩy repo lên GitHub.
3. Render → New → Web Service → kết nối repository.
4. Build Command: `npm install`.
5. Start Command: `node server/server.js`.
6. Environment: `NODE_ENV=production`; thêm `BOT_TOKEN` bằng token bot Telegram để backend xác thực `initData`.
7. Deploy, lấy URL HTTPS `*.onrender.com`.
8. Trong BotFather cấu hình Mini App/Web App trỏ tới URL đó.

Render yêu cầu web service bind `0.0.0.0` và nên dùng `PORT`; code đã dùng `process.env.PORT` với mặc định 10000. Build/start command trên phù hợp với Node web service.

## Telegram
Frontend đọc `window.Telegram.WebApp.initDataUnsafe.user.id` để nhận diện người dùng. Khi có `BOT_TOKEN`, server xác thực chữ ký của `initData`; fallback client chỉ nhằm hỗ trợ test local.

## Cược
- Tối thiểu 100 Xu.
- Tối đa `min(20% số dư, 1.000.000 Xu)`.
- Người chơi mới: 100.000 Xu.
- Kết quả settlement nằm ở backend.

## Tỉ lệ 40%
Server sử dụng bộ lập lịch quyết định thắng theo tổng lượt chơi: `floor(0.4*n) - floor(0.4*(n-1))`. Đây là cơ chế đạt 40% theo tổng số lượt trong dài hạn, không phải 40% độc lập ở từng lượt.

## Lưu ý dữ liệu
JSON phù hợp cho demo/small deployment. Dữ liệu quan trọng cần persistent disk hoặc database riêng khi chạy production lâu dài.
