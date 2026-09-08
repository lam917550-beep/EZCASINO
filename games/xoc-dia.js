export const game = {"id":"xoc-dia","name":"Xóc Đĩa","category":"Đồng xu","mechanic":"cards","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
