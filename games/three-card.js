export const game = {"id":"three-card","name":"Ba Lá","category":"Bài","mechanic":"wheel","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
