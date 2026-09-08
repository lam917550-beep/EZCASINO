export const game = {"id":"rainbow-reels","name":"Rainbow Reels","category":"3 cột","mechanic":"multiplier","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
