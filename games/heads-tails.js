export const game={id:'heads-tails',name:'Ngửa / Sấp',category:'Đồng xu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
