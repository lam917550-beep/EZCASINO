export const game={id:'andar-bahar',name:'Andar Bahar',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
