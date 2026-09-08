export const game={id:'ladder',name:'Bậc Thang',category:'Hệ số'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
