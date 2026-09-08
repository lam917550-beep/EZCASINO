export const game={id:'bingo',name:'Bingo',category:'Lô tô'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
