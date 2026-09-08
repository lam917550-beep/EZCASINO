export const game={id:'tai-xiu',name:'Tài Xỉu',category:'Xúc xắc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
