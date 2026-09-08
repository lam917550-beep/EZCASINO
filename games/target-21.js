export const game = {"id":"target-21","name":"Mục Tiêu 21","category":"Số","mechanic":"cards","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
