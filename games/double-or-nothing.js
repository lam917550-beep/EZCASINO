export const game = {"id":"double-or-nothing","name":"Gấp Đôi Hay Mất","category":"Lật","mechanic":"reels","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
