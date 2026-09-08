export const game = {"id":"diamond-wheel","name":"Bánh Xe Kim Cương","category":"Vòng quay","mechanic":"crash","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
