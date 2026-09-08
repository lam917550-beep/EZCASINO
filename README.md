# CASINO SLOT VIETNAM V12

Build: `npm install`
Start: `node server/server.js`

ENV: `NODE_ENV`, `BOT_TOKEN`, `PUBLIC_URL`, `WEB_APP_URL`, `ADMIN_ID`.

Bản V12 giữ bộ game 75, 100 pet, dữ liệu lịch sử và cấu trúc `assets/`, `games/`, `server/`. Có 1.000 micro-feature definitions trong `FEATURES_1000.md`.

Hiệu năng: render theo batch, event delegation, Web Audio SFX cục bộ, cache static, JSON writes bất đồng bộ. Các animation chỉ chạy ở visual game đang mở.

Lệnh ADMIN: `/ownerhelp`, `/thongbao`, `/taogiftcode`, `/taoevent`, `/gift`, `/setxu`, `/setvip`, `/setlevel`, `/addpet`, `/removepet`, `/taopet`, `/petsid`, `/ban`, `/unban`, `/baotri`, `/resetstreak`, `/stats`.

Đây là game Xu ảo, không có nạp/rút tiền thật.


## Giao diện đã chọn
V12 áp dụng concept A — thanh lịch/sáng: xanh trời, hero phong cách thiên đường, card game sáng và bố cục ưu tiên WebView. Ảnh hero đã được nén nhẹ; không dùng ảnh làm background cho toàn bộ trang.
