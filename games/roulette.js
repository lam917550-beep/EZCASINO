export const game={id:'roulette',name:'Cò quay',category:'Bánh xe'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
