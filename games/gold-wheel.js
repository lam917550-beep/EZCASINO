export const game = {"id":"gold-wheel","name":"Bánh Xe Vàng","category":"Vòng quay","mechanic":"grid","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
