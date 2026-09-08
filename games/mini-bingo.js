export const game={id:'mini-bingo',name:'Mini Bingo',category:'Lô tô'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
