export const game={id:'xoc-dia',name:'Xóc Đĩa',category:'Đồng xu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
