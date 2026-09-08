export const game = {"id":"sum-guess","name":"Đoán Tổng","category":"Số","mechanic":"coin","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
