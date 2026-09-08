export const game = {"id":"star-wheel","name":"Bánh Xe Sao","category":"Vòng quay","mechanic":"multiplier","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
