export const game = {"id":"samurai-reels","name":"Samurai Reels","category":"3 cột","mechanic":"coin","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
