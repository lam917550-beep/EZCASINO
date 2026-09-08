export const game={id:'joker-draw',name:'Rút Joker',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
