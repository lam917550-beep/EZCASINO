export const game={id:'war',name:'Chiến Tranh Bài',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
