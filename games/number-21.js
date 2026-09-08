export const game = {"id":"number-21","name":"Số 21","category":"Số","mechanic":"reels","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
