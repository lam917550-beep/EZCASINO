export const game={id:'lower-card',name:'Lá Thấp Hơn',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
