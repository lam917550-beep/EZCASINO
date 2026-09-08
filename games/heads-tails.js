export const game = {"id":"heads-tails","name":"Ngửa / Sấp","category":"Đồng xu","mechanic":"cups","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
