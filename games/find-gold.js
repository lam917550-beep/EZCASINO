export const game = {"id":"find-gold","name":"Tìm Vàng","category":"Ô","mechanic":"multiplier","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
