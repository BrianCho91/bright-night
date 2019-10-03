// import Tile from './tile';

// export function buildLevel(level, game) {
//   // debugger
//   let blackTiles = [];
//   let whiteTiles = [];

//   level.forEach((tile, idx) => {
//     if (tile !== 0) {
//       let pos = {
//         x: (idx % 20) * 50,
//         y: (Math.floor((idx / 20)) * 110)
//       }
//       let width = 50;
//       let height = 50;
//       if (tile === 1) {
//         blackTiles.push(new Tile(pos, width, height, "black", game))
//         // blackTiles.push(new Tile(pos.x += 50, "black", game))
//       }
//       if (tile === 2) {
//         blackTiles.push(new Tile(pos, width, height, "green", game))
//         // blackTiles.push(new Tile(pos.x += 50, "black", game))
//       }
//       if (tile === 3) {
//         let height = 20
//         blackTiles.push(new Tile(pos, width, height, "red", game))
//       }
//     }
//   })
//   // console.log(blackTiles)
//   return blackTiles;
// }

export const levels = {
    "1": {

      "tiles":
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          2, 1, 1, 1, 1, 1, 1, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
       // 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
        ],
      "startingPos":
        [250, 250]
    }
}

// export default levels;

// console.log(levels)


// for (let i = 0; i < this.layout.length; i++) {
//   let tile = this.layout[i];
//   let posX = (i % 10) * 100;
//   let posY = (Math.floor(i / 10) * 100);
//   // console.log(posX, posY)
//   if (tile !== 0) {
//     this.draw(ctx, posX, posY, tile)
//   }
// }