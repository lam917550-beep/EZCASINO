export const game={id:'wheel-7',name:'Vòng 7',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
