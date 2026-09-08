export const game={id:'three-card',name:'Ba Lá',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
