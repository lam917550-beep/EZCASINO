export const game={id:'tet-fortune',name:'Tết May Mắn',category:'Tết'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
