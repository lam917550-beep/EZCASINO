export const game = {"id":"ocean-wheel","name":"Bánh Xe Đại Dương","category":"Vòng quay","mechanic":"dice","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
