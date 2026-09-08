export const game = {"id":"rainbow-wheel","name":"Bánh Xe Cầu Vồng","category":"Vòng quay","mechanic":"animal","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
