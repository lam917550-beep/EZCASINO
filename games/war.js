export const game = {"id":"war","name":"Chiến Tranh Bài","category":"Bài","mechanic":"cards","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
