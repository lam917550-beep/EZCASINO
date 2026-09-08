export const game={id:'star-wheel',name:'Bánh Xe Sao',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
