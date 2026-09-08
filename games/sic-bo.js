export const game={id:'sic-bo',name:'Sic Bo',category:'Xúc xắc'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
