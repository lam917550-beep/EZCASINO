export const game={id:'lucky-symbol',name:'Biểu Tượng May Mắn',category:'Biểu tượng'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
