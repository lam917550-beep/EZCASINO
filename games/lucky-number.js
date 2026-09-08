export const game = {"id":"lucky-number","name":"Con Số May Mắn","category":"Số","mechanic":"cards","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
