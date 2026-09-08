export const game={id:'target-dice',name:'Bắn Trúng Mục Tiêu',category:'Xúc xắc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
