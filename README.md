# CASINO SLOT VIETNAM V3

Telegram Mini App game giải trí bằng **Xu ảo**. Không có nạp/rút tiền thật.

## Render

**Build Command**
```bash
npm install
```

**Start Command**
```bash
node server/server.js
```

**Environment Variables**
```text
NODE_ENV=production
BOT_TOKEN=TOKEN_BOTFATHER
WEB_APP_URL=https://YOUR-RENDER-URL.onrender.com
PUBLIC_URL=https://YOUR-RENDER-URL.onrender.com
ADMIN_ID=TELEGRAM_ID_CUA_ADMIN
```

`PORT` không cần tự đặt; server đọc `process.env.PORT` do Render cung cấp.

## Telegram `/start`

Backend dùng webhook `POST /telegram/webhook`. Khi có `/start`, server trả thẳng Bot API method `sendMessage` trong HTTP response webhook với nút **MỞ CASINO**. Cách này tránh thêm một round-trip API server→Telegram trong nhánh `/start`, nhưng độ trễ thực tế vẫn phụ thuộc Telegram/network và không thể cam kết cứng 0,1 giây.

Khi có `BOT_TOKEN` + `PUBLIC_URL`, server tự gọi `setWebhook` lúc khởi động.

## ADMIN

Đặt `ADMIN_ID` là Telegram ID của tài khoản quản trị.

Trong chat với bot:

- `/ownerhelp` — chỉ ADMIN mới nhận tài liệu đầy đủ.
- `/thongbao <nội dung>` — gửi thông báo cho toàn bộ người chơi.
- `/taogiftcode <CODE> <XU> [PET_ID]` — tạo giftcode và tự động thông báo code cho người chơi mà không nói số Xu.
- `/gift <ID> <XU>` — tặng Xu.
- `/gift <ID> pet:<PET_ID>` — tặng pet.
- `/setxu <ID> <XU>` — đặt số dư.
- `/setvip <ID> <0-20>` — đặt VIP.
- `/setlevel <ID> <level>` — đặt level.
- `/addpet <ID> <PET_ID> [số lượng]` — thêm pet.
- `/removepet <ID> <PET_ID> [số lượng]` — xóa pet.
- `/block <ID>` / `/unblock <ID>` — khóa/mở tài khoản.
- `/resetstreak <ID>` — reset chuỗi đăng nhập.
- `/stats` — thống kê server.
- `/maintenance <on|off>` — chuyển trạng thái bảo trì.

Giftcode được đổi trong API `/api/giftcode/redeem`; code một lần, có thể kèm pet.

## Hệ thống game

- 130+ game, mỗi game có file riêng trong `games/`.
- Backend settlement, chống xử lý request lặp qua `requestId`.
- Cược: tối thiểu 100 Xu, tối đa 20% số dư và không quá 1.000.000 Xu.
- Người mới: 100.000 Xu.
- Daily streak theo ngày, reset khi bỏ lỡ.
- Level / XP / VIP / lịch sử / bảng xếp hạng / realtime event / chat.
- SFX tạo bằng Web Audio, không tải file audio nặng.
- Effect tạo bằng DOM animation nhỏ, tự hủy sau khi chạy.
- 12.000 feature hooks và 600 thành tựu làm catalog mở rộng.

## 40% win scheduler

Kết quả settlement sử dụng bộ đếm theo từng game: lượt thứ N được đánh dấu thắng khi `floor(0.4*N)` tăng so với lượt trước. Điều này khiến tỷ lệ cộng dồn tiến về 40% một cách xác định, thay vì dùng random thuần túy. Con số này là tính chất mô phỏng trong game Xu ảo, không phải cam kết tài chính.

## Chạy local

```bash
npm install
node server/server.js
```

Mở `http://localhost:10000`.
