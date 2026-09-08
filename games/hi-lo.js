export const game={id:'hi-lo',name:'Cao Thấp',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
