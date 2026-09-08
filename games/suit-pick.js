export const game = {"id":"suit-pick","name":"Chọn Chất","category":"Bài","mechanic":"multiplier","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
