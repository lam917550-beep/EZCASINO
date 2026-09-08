export const game={id:'fruit-reels',name:'Fruit Reels',category:'3 cột'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
