export const game={id:'poker',name:'Poker đơn giản',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
