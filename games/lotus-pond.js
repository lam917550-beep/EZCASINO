export const game={id:'lotus-pond',name:'Ao Sen',category:'Ô'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
