export const game={id:'memory-card',name:'Lật Cặp Bài',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
