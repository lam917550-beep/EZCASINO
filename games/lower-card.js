export const game = {"id":"lower-card","name":"Lá Thấp Hơn","category":"Bài","mechanic":"keno","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
