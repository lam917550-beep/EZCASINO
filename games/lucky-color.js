export const game = {"id":"lucky-color","name":"Màu May Mắn","category":"Màu","mechanic":"coin","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
