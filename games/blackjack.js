export const game={id:'blackjack',name:'Xì Dách',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
