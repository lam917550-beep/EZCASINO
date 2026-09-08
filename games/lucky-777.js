export const game = {"id":"lucky-777","name":"Lucky 777","category":"3 cột","mechanic":"animal","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
