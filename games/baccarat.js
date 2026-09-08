export const game = {"id":"baccarat","name":"Baccarat","category":"Bài","mechanic":"crash","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
