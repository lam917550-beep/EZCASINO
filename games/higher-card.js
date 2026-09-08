export const game={id:'higher-card',name:'Lá Cao Hơn',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
