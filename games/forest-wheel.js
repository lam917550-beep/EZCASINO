export const game={id:'forest-wheel',name:'Bánh Xe Rừng',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
