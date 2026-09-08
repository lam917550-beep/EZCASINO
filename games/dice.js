export const game = {"id":"dice","name":"Xúc Xắc","category":"Xúc xắc","mechanic":"wheel","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
