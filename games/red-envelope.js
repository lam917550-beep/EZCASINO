export const game={id:'red-envelope',name:'Lì Xì',category:'Phong bao'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
