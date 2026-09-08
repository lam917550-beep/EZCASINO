export const game = {"id":"tai-xiu","name":"Tài Xỉu","category":"Xúc xắc","mechanic":"dice","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
