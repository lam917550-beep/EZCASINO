export const game={id:'suit-pick',name:'Chọn Chất',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
