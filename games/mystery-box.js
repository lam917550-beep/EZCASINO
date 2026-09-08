export const game = {"id":"mystery-box","name":"Hộp Bí Ẩn","category":"Hộp","mechanic":"cups","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
