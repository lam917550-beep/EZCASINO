export const game={id:'keno',name:'Keno',category:'Bóng số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
