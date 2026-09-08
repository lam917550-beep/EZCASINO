export const game = {"id":"fortune-ball","name":"Quả Cầu Tiên Tri","category":"Quả cầu","mechanic":"crash","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
