export const game = {"id":"lantern-fest","name":"Đèn Lồng May Mắn","category":"Đèn","mechanic":"grid","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
