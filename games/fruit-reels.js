export const game = {"id":"fruit-reels","name":"Fruit Reels","category":"3 cột","mechanic":"keno","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
