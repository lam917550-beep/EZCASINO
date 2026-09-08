export const game = {"id":"ice-wheel","name":"Bánh Xe Băng","category":"Vòng quay","mechanic":"cups","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
