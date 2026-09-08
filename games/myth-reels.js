export const game = {"id":"myth-reels","name":"Myth Reels","category":"3 cột","mechanic":"crash","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
