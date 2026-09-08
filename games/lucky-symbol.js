export const game = {"id":"lucky-symbol","name":"Biểu Tượng May Mắn","category":"Biểu tượng","mechanic":"number","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
