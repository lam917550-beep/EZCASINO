export const game={id:'red-suit-black-suit',name:'Đỏ Chất / Đen Chất',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
