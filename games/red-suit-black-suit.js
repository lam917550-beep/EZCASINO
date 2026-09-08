export const game = {"id":"red-suit-black-suit","name":"Đỏ Chất / Đen Chất","category":"Bài","mechanic":"dice","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
