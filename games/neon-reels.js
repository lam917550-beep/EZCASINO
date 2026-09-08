export const game = {"id":"neon-reels","name":"Neon Reels","category":"3 cột","mechanic":"wheel","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
