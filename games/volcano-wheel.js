export const game = {"id":"volcano-wheel","name":"Bánh Xe Núi Lửa","category":"Vòng quay","mechanic":"cards","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
