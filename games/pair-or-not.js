export const game={id:'pair-or-not',name:'Có Đôi Không',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
