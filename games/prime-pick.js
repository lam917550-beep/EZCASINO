export const game = {"id":"prime-pick","name":"Chọn Số Nguyên Tố","category":"Số","mechanic":"grid","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
