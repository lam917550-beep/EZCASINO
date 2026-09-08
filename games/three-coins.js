export const game={id:'three-coins',name:'Ba Đồng Xu',category:'Đồng xu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
