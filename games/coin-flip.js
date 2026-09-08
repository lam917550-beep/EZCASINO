export const game={id:'coin-flip',name:'Tung Đồng Xu',category:'Đồng xu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
