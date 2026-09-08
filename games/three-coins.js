export const game = {"id":"three-coins","name":"Ba Đồng Xu","category":"Đồng xu","mechanic":"multiplier","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
