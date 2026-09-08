export const game={id:'red-black',name:'Đỏ Đen',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
