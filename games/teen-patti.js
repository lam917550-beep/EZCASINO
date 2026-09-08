export const game={id:'teen-patti',name:'Teen Patti',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
