export const game = {"id":"bau-cua","name":"Bầu Cua Tôm Cá","category":"Đồ hình","mechanic":"reels","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
