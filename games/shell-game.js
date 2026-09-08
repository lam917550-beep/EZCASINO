export const game = {"id":"shell-game","name":"Ba Vỏ Sò","category":"Vỏ sò","mechanic":"animal","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
