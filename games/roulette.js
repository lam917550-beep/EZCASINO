export const game = {"id":"roulette","name":"Cò quay","category":"Bánh xe","mechanic":"animal","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
