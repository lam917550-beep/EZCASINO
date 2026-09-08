export const game = {"id":"lucky-koi","name":"Cá Koi May Mắn","category":"Cá","mechanic":"number","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
