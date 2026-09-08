export const game = {"id":"dragon-egg","name":"Trứng Rồng","category":"Trứng","mechanic":"dice","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
