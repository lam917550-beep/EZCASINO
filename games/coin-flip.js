export const game = {"id":"coin-flip","name":"Tung Đồng Xu","category":"Đồng xu","mechanic":"coin","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
