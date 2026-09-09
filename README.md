# CASINO SLOT VIETNAM — V19 GAME ENGINE

Game dùng Xu ảo, không nạp/rút tiền thật.

## Render

Build: `npm install`

Start: `node server/server.js`

ENV: `NODE_ENV=production`, `BOT_TOKEN`, `WEB_APP_URL`, `PUBLIC_URL`, `ADMIN_ID`.

## Game rules

Game thường: kết quả thắng duy nhất là **x2**. Lucky Spin là ngoại lệ: 16 ô hiển thị gồm 4 ô X2, 2 ô Hoàn tiền, 1 ô X5 và 9 ô trống. Xác suất server của Lucky Spin: 27% X2, 10% hoàn tiền, 3% X5, 60% trống.

## Hiệu ứng

Lucky Spin quay 3 giây; Tài Xỉu lắc xúc xắc; Slot reel; Coin flip; Card deal; Grid reveal; Crash launch. Nút `Hiện kết quả` bỏ qua phần trình diễn. SFX được sinh bằng Web Audio API trên thao tác người dùng.

## Tài khoản

Telegram Mini App tự nhận diện Telegram user; lần đầu yêu cầu hồ sơ. Web dùng session token. Username duy nhất, mật khẩu tối thiểu 8 ký tự, có mô tả hồ sơ.

## Pet

Pet lưu trong player, bonus Xu/XP được tính lại khi đăng nhập. `/taopet PETID XU% XP% ICON TEN [HIDE]` chấp nhận phần trăm nguyên dương không đặt ceiling 1000 như các bản cũ.

## Admin

`/myid` cho tất cả người dùng. Admin có `/ownerhelp`, `/randomid`, `/profile`, `/taopet`, `/petsid`, `/taoevent`, `/event`, `/thongbao`, `/taogiftcode`, `/gift`, `/ban`, `/unban`, `/baotri`, `/setxu`, `/setvip`, `/setlevel`, `/addpet`, `/removepet`, `/resetstreak`, `/resetxp`, `/setname`, `/setusername`, `/givebank`, `/clearbank`, `/setpetshop`, `/giveallpet`, `/giftcodeinfo`, `/deletegiftcode`, `/eventclear`, `/serverinfo`.

## 100 tính năng

Xem `FEATURES_100.md`.
