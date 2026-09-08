export const game = {"id":"target-dice","name":"Bắn Trúng Mục Tiêu","category":"Xúc xắc","mechanic":"reels","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
