export const game={id:'coin-rain',name:'Mưa Xu',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
