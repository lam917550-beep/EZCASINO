export const game={id:'color-pick',name:'Chọn Màu',category:'Màu'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
