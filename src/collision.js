export function detectCollisionTop(tile, player) {
  // console.log('hi')
  let topOfPlayer = player.pos.y;
  let leftOfPlayer = player.pos.x
  let botOfPlayer = player.pos.y + player.height;
  let rightOfPlayer = player.pos.x + player.width;

  let topOfTile = tile.pos.y;
  let leftOfTile = tile.pos.x;
  let botOfTile = tile.pos.y + tile.height;
  let rightOfTile = tile.pos.x + tile.width;

  if (
    // player.jumping === false &&
    botOfPlayer >= topOfTile
    // topOfPlayer <= botOfTile &&
    // leftOfPlayer >= leftOfTile &&
    // rightOfPlayer <= rightOfTile
    ) {
    return true;
  } else {
    return false;
  }
}

// export function detectCollisionBot(tile, player) {
//   // console.log('hi')
//   let topOfPlayer = player.pos.y;
//   // let leftOfPlayer = player.pos.x
//   // let botOfPlayer = player.pos.y + player.height;
//   // let rightOfPlayer = player.pos.x + player.width;

//   // let topOfTile = tile.pos.y;
//   // let leftOfTile = tile.pos.x;
//   let botOfTile = tile.pos.y + tile.height;
//   // let rightOfTile = tile.pos.x + tile.width;

//   if (
//     // botOfPlayer >= topOfTile &&
//     topOfPlayer <= botOfTile &&
//     player.color !== "black"
//     // player.jumping === false
//     // leftOfPlayer >= leftOfTile &&
//     // rightOfPlayer <= rightOfTile
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// export function detectCollisionTop(tile, player) {
//   // console.log('hi')
//   // let topOfPlayer = player.pos.y;
//   // let leftOfPlayer = player.pos.x
//   let botOfPlayer = player.pos.y + player.height;
//   // let rightOfPlayer = player.pos.x + player.width;

//   let topOfTile = tile.pos.y;
//   // let leftOfTile = tile.pos.x;
//   let botOfTile = tile.pos.y + tile.height;
//   // let rightOfTile = tile.pos.x + tile.width;

//   if (
//     botOfPlayer >= topOfTile &&
//     player.color !== "black"
//     // player.jumping === false
//     // topOfPlayer <= botOfTile
//     // leftOfPlayer >= leftOfTile &&
//     // rightOfPlayer <= rightOfTile
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }







// export function detectCollisionX(tile, player) {
//   // console.log('hi')
//   // let topOfPlayer = player.pos.y;
//   let leftOfPlayer = player.pos.x
//   // let botOfPlayer = player.pos.y + player.height;
//   let rightOfPlayer = player.pos.x + player.width;

//   // let topOfTile = tile.pos.y;
//   let leftOfTile = tile.pos.x;
//   // let botOfTile = tile.pos.y + tile.height;
//   let rightOfTile = tile.pos.x + tile.width;

//   if (
//     // botOfPlayer >= topOfTile &&
//     // topOfPlayer <= botOfTile &&
//     leftOfPlayer >= leftOfTile &&
//     rightOfPlayer <= rightOfTile
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }