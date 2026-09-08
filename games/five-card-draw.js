export const game={id:'five-card-draw',name:'Năm Lá',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
