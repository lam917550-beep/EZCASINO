export const game = {"id":"dragon-reels","name":"Dragon Reels","category":"3 cột","mechanic":"number","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
