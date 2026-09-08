export const game = {"id":"desert-wheel","name":"Bánh Xe Sa Mạc","category":"Vòng quay","mechanic":"reels","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
