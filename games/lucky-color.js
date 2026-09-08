export const game={id:'lucky-color',name:'Màu May Mắn',category:'Màu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
