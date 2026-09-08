export const game={id:'dragon-tiger',name:'Rồng Hổ',category:'Bài'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
