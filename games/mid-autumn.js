export const game={id:'mid-autumn',name:'Trung Thu',category:'Trăng'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
