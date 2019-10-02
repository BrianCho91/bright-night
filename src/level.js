import Tile from './tile';

export function buildLevel(level, game) {
  // debugger
  let blackTiles = [];
  let whiteTiles = [];

  level.forEach((tile, idx) => {
    if (tile !== 0) {
      let pos = {
        x: (idx % 10) * 100,
        y: (Math.floor(idx / 10) * 100)
      }
      if (tile === 1) {
        blackTiles.push(new Tile(pos, "black", game))
      }
    }
  })
  return blackTiles;
}

export const levels = {
    "1": {

      "tiles":
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 1, 2, 2, 0, 0, 3, 3, 3, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1
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