export const game = {"id":"andar-bahar","name":"Andar Bahar","category":"Bài","mechanic":"number","phases":["chuẩn bị","hoạt ảnh","tiết lộ","kết quả"]};
export function createRound(seed){return {gameId:game.id,mechanic:game.mechanic,seed,phases:game.phases};}
