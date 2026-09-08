# CASINO SLOT VIETNAM V4.2 FINAL

Telegram Mini App game giải trí bằng **Xu ảo**. Bản V4 tập trung vào 3 ưu tiên: **không lỗi luồng game, WebView mượt, giao diện cinematic**.

## Điểm chính

- **180 game**; mỗi game có module riêng trong `games/` và catalog server trong `server/games.json`.
- 12.000 feature modules/catalog hooks để mở rộng hệ thống.
- 650 achievements.
- Backend settlement ở Node.js/Express.
- Session được cấp sau khi bootstrap; API game không phụ thuộc vào việc tin dữ liệu Telegram trực tiếp từ client.
- Nếu cấu hình `BOT_TOKEN`, server kiểm tra chữ ký `initData`.
- SFX phát bằng Web Audio API, không tải file âm thanh nặng.
- Effect thắng được giản lược thành animation CSS nhẹ; không có particle loop liên tục.
- CSS animation thay cho JavaScript animation loop ở phần giao diện game.
- Có nút **Hiện kết quả sớm** để máy yếu bỏ qua nhịp cinematic dài.
- Chat realtime bằng SSE.
- Daily streak, level/XP, VIP, shop, pet, giftcode, bảng xếp hạng, lịch sử.
- Bot `/start` trả về Mini App button; cuối lời chào có `👑 Chủ bot: @itznvl`.

## Chạy Render

### Environment

```text
NODE_ENV=production
BOT_TOKEN=TOKEN_BOTFATHER
WEB_APP_URL=https://TEN-SERVICE.onrender.com
PUBLIC_URL=https://TEN-SERVICE.onrender.com
ADMIN_ID=TELEGRAM_ID_CUA_BAN
```

### Commands

```text
Build Command: npm install
Start Command: node server/server.js
```

Server lắng nghe `0.0.0.0` và đọc `PORT` từ môi trường.

## Telegram Bot

Sau khi Render chạy, server tự gọi Telegram `setWebhook` nếu có `BOT_TOKEN` + `PUBLIC_URL`. Bot sẽ nhận `/start` và trả về nút `🎰 MỞ CASINO`.

Nếu webhook đã trỏ nơi khác, dùng endpoint quản trị `/api/admin/set-webhook` hoặc đặt lại webhook bằng Bot API.

## Lệnh ADMIN

Chỉ `ADMIN_ID` mới được phép dùng: `/thongbao`, `/taogiftcode`, `/gift`, `/setxu`, `/setvip`, `/setlevel`, `/addpet`, `/removepet`, `/block`, `/unblock`, `/resetstreak`, `/stats`, `/maintenance`, `/ownerhelp`.

`/ownerhelp` chỉ trả tài liệu cho tài khoản ADMIN và không được render trên Mini App.

## Luật Xu

- Người mới: 100.000 Xu.
- Cược tối thiểu: 100 Xu.
- Cược tối đa: `min(20% số dư, 1.000.000 Xu)`.
- Không có nạp/rút tiền thật.
- Win scheduler theo từng game hướng tỷ lệ tích lũy về 40% trong dài hạn; đây không phải lời hứa về xác suất độc lập của từng lượt.

## QA

Bản V4 được kiểm tra 5 vòng trước khi đóng gói: syntax, cấu trúc, API/DOM references, logic invariant, runtime source-load checks.

## Lưu ý database

`server/database/db.json` phù hợp demo/small deployment. Nếu dữ liệu có giá trị lâu dài, cần persistent storage/database riêng.
