export const game={id:'volcano-wheel',name:'Bánh Xe Núi Lửa',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
