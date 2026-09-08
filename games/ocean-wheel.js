export const game={id:'ocean-wheel',name:'Bánh Xe Đại Dương',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
