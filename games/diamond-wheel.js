export const game={id:'diamond-wheel',name:'Bánh Xe Kim Cương',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
