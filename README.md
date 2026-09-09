# CASINO SLOT VIETNAM — LASTFINAL V15 ULTRA

Bản phát hành game Xu ảo cho Telegram Mini App + web login. Mục tiêu: trải nghiệm nhiều hệ thống, gameplay server-authoritative, chống spam và ưu tiên hiệu năng WebView.

## Tính năng chính

- 75 game active, module game legacy vẫn giữ trong `games/`.
- 100 pet shop; ID pet là dữ liệu nội bộ/server. Pet tăng Xu/XP, không tăng tỷ lệ thắng.
- 10.000 feature/micro-feature được liệt kê trong `FEATURES_10000.md` và `server/featureCatalog.json`.
- 3 giây cooldown mỗi lượt chơi.
- Kết quả authoritative ở server. Frontend chỉ hiển thị/presentation.
- Tỷ lệ thắng dài hạn scheduler 42%; một phần thắng là x2 với tần suất thấp hơn x1.5.
- Số dư cược tối đa 75% số dư, trần 1.000.000 Xu.
- Daily/monthly login reward với Xu + pet.
- Level / XP tăng dần, level-up thưởng Xu và pet.
- BXH Xu, XP, thắng tuần.
- Ngân hàng 10%/ngày, rút sau tối thiểu 7 ngày.
- Pet marketplace: mua một lần, bán nhận 40% giá mua.
- Giftcode / event / admin commands.
- `/start` trả trực tiếp Bot API response có nút mở Mini App.
- Telegram tự đăng nhập; web yêu cầu username + mật khẩu 8+ ký tự.
- Telegram `initData` được verify khi `BOT_TOKEN` tồn tại.
- SFX Web Audio nhẹ; effect chỉ chạy trong game đang mở.
- Cache static dài hạn theo version; HTML no-store.
- JSON DB ghi bất đồng bộ để giảm block event loop.

## Render

Build command:
```bash
npm install
```

Start command:
```bash
node server/server.js
```

Environment:
```text
NODE_ENV=production
BOT_TOKEN=TOKEN_BOTFATHER
WEB_APP_URL=https://YOUR-APP.onrender.com
PUBLIC_URL=https://YOUR-APP.onrender.com
ADMIN_ID=TELEGRAM_ID_ADMIN
```

## Telegram webhook

Khi `BOT_TOKEN` + `PUBLIC_URL` tồn tại, server cố gắng gọi `setWebhook` khi khởi động. Bạn có thể gọi endpoint `/api/admin/set-webhook` nếu cần đặt lại.

`/start` trả message trực tiếp trong response của webhook, giúp tránh thêm một request Bot API cho phản hồi chính.

## Bot ADMIN

Gõ `/ownerhelp` bằng tài khoản có `ADMIN_ID` để xem đầy đủ lệnh. Danh sách không được hiển thị công khai trong Mini App.

Các lệnh chính: `/thongbao`, `/taogiftcode`, `/taoevent`, `/gift`, `/giftall`, `/taopet`, `/petsid`, `/ban`, `/unban`, `/baotri`, `/setxu`, `/setvip`, `/setlevel`, `/addpet`, `/removepet`, `/resetstreak`, `/ann`, `/clearhistory`, `/serverinfo`, `/ownerhelp`.

## Database

Dữ liệu demo được lưu trong `server/database/db.json`. Với production thực tế, nên dùng persistent storage/database ngoài JSON nếu cần độ bền dữ liệu cao.

## Kiểm tra

```bash
npm install
npm run check
node --check app.js
```

Lưu ý: không thể bảo đảm 0 ms lag trên mọi thiết bị vì Telegram WebView/hardware khác nhau. Source này loại bỏ các animation loop/canvas/particle nặng và giảm DOM/listener ở các hot path.


## Cập nhật ADMIN

### /taopet

Cú pháp mới:

`/taopet PETID XU% XP% ICON TEN [HIDE]`

- `XU%`: % Xu pet cộng thêm khi thắng.
- `XP%`: % XP pet cộng thêm.
- `ICON`: emoji/icon hiển thị.
- `TEN`: tên pet.
- `HIDE`: ẩn pet khỏi cửa hàng nhưng vẫn có thể tặng bằng ADMIN, giftcode hoặc phần thưởng. Bỏ `HIDE` để pet xuất hiện trong shop.

Giá pet được hệ thống tính tự động từ bonus để tránh ADMIN phải truyền thêm tham số.

### /event

`/event list` xem event

`/event create random|xu|pet GIA_TRI MAX_CLAIMS NOI_DUNG` tạo event và broadcast

`/event start EVENT_ID` bật

`/event stop EVENT_ID` tắt

`/event broadcast EVENT_ID` thông báo lại

`/event info EVENT_ID` xem chi tiết

`/event delete EVENT_ID` xóa

Người chơi có thể xem event active và claim một lần trong Mini App.

### Cược

Cược tối đa hiện tại chỉ là `75% số dư`, không còn trần 1.000.000 Xu.

### Vốn ban đầu

Người chơi mới nhận `50.000 Xu`. Người chơi cũ không bị tự động reset số dư.


## Cập nhật phiên bản 14

- Vốn người chơi mới: 50.000 Xu.
- Max cược: đúng 75% số dư, không có trần tiền tuyệt đối.
- `/taopet PETID XU% XP% ICON TEN [HIDE]`: chấp nhận cả `10` và `10%`; `HIDE` ẩn pet khỏi shop.
- `/event`: list/create/start/stop/delete/broadcast/info; event có thể giới hạn số lượt claim và người chơi claim 1 lần.
- Bổ sung `/giftcodeinfo`, `/deletegiftcode`, `/resetuser`, `/resetweek`, `/eventclear` cùng các lệnh ADMIN cũ.


## V16 — BigInt/Xu vô hạn chữ số

- Số dư Xu và tiền ngân hàng được lưu dưới dạng chuỗi số nguyên và xử lý bằng `BigInt` ở server. Không dùng JavaScript `Number` cho số dư/cược.
- Có thể nhập cược và gửi ngân hàng bằng số có rất nhiều chữ số, miễn là không vượt 75% số dư.
- Pet đang trang bị được lưu trong `activePet` và bonus được khôi phục lại mỗi lần bootstrap/session bằng `refreshPetBonus`, nên thoát vào lại vẫn có tác dụng.
- Tiền lịch sử/giftcode/event Xu được chuẩn hóa sang chuỗi để tránh mất độ chính xác.

### Lưu ý
BigInt xử lý số nguyên chính xác tùy kích thước bộ nhớ server; không phải giới hạn bởi 2^53 như Number.

## V17 — UI/UX & performance
- Giao diện lấy cảm hứng từ phong cách casino cổ điển sáng, khung gỗ + vàng, không sao chép nguyên bản ảnh tham khảo.
- Chat room không còn hiển thị trong Mini App.
- SFX được sinh cục bộ bằng Web Audio API, không cần mua/tải audio.
- Animation chỉ chạy trong modal game đang mở; trang chính không có animation loop.
- Có `prefers-reduced-motion`, không canvas, không particle system.
- 75 game active để giảm tải DOM; các module game còn lại trong repository được giữ để tương thích mở rộng.
- `/api/play` settlement ở server; client chỉ trình diễn kết quả được server trả về.
- Tiền Xu tiếp tục dùng BigInt-string; lãi ngân hàng dùng phép toán nguyên để không mất chính xác.
