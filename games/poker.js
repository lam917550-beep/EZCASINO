export const game = {"id":"poker","name":"Poker đơn giản","category":"Bài","mechanic":"grid","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
