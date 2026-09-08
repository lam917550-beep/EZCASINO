export const game = {"id":"ladder","name":"Bậc Thang","category":"Hệ số","mechanic":"coin","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
