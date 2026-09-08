export const game = {"id":"lotus-pond","name":"Ao Sen","category":"Ô","mechanic":"reels","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
