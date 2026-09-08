export const game = {"id":"golden-eggs","name":"Trứng Vàng","category":"Trứng","mechanic":"keno","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
