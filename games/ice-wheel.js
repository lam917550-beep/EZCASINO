export const game={id:'ice-wheel',name:'Bánh Xe Băng',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
