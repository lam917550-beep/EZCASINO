export const game = {"id":"find-gem","name":"Tìm Ngọc","category":"Ô","mechanic":"cups","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
