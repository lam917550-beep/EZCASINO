export const game={id:'lucky-spin',name:'Lucky Spin',category:'Vòng quay'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
