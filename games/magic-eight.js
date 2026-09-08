export const game = {"id":"magic-eight","name":"Magic 8","category":"Quả cầu","mechanic":"grid","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
