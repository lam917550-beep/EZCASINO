export const game = {"id":"pick-a-door","name":"Chọn Cửa","category":"Cửa","mechanic":"grid","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
