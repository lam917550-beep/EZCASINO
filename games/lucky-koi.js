export const game={id:'lucky-koi',name:'Cá Koi May Mắn',category:'Cá'};
export function createRound(input={}){return {gameId:game.id,payload:input,createdAt:Date.now()}}
