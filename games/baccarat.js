export const game={id:'baccarat',name:'Baccarat',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
