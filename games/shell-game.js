export const game={id:'shell-game',name:'Ba Vỏ Sò',category:'Vỏ sò'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
