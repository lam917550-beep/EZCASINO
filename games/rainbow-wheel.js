export const game={id:'rainbow-wheel',name:'Bánh Xe Cầu Vồng',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
