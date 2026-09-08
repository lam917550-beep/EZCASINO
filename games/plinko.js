export const game = {"id":"plinko","name":"Plinko","category":"Rơi bóng","mechanic":"grid","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
