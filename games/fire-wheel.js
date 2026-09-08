export const game={id:'fire-wheel',name:'Bánh Xe Lửa',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
