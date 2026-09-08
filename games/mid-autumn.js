export const game = {"id":"mid-autumn","name":"Trung Thu","category":"Trăng","mechanic":"animal","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
