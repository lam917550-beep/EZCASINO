export const game = {"id":"tet-fortune","name":"Tết May Mắn","category":"Tết","mechanic":"crash","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
