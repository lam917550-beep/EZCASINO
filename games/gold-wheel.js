export const game={id:'gold-wheel',name:'Bánh Xe Vàng',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
