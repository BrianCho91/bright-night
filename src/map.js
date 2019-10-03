import Tile from './tile';

class Map {
  constructor(level, game) {
    this.level = level,
      this.game = game
      this.tiles = [];
  }

  create() {
    let blackTiles = [];
    let whiteTiles = [];
// debugger
    this.level.forEach((tile, idx) => {
      if (tile !== 0) {
        let pos = {
          x: (idx % 20) * 50,
          y: (Math.floor((idx / 20)) * 50)
        }
        let width = 50;
        let height = 50;
        if (tile === 1) {
          // blackTiles.push(new Tile(pos, width, height, "black", this.game))
          // debugger
          this.tiles.push(new Tile(pos, width, height, "black", this.game))
        }
        if (tile === 2) {
          // blackTiles.push(new Tile(pos, width, height, "green", this.game))

          this.tiles.push(new Tile(pos, width, height, "grey", this.game))
        }
        if (tile === 3) {
          let height = 20
          // blackTiles.push(new Tile(pos, height, "red", this.game))
          this.tiles.push(new Tile(pos, width, height, "red", this.game))
        }
      }
    })
    // console.log(blackTiles)
    // return blackTiles;
    return this.tiles
  }

  flipMap() {
    // debugger
    for (let i = 0; i < this.level.length; i++) {
      if (this.level[i] === 1) {
        this.level[i] = 2
      } else if (this.level[i] === 2) {
        this.level[i] = 1
      }
    }
    // this.level.forEach(tile => {
    //   // debugger
    //   tile === 1 ? tile = 2 : tile = 1
    //   tile === 2 ? tile = 1 : tile = 2
    // })
    // this.tiles = [];
    // this.create();

    this.tiles.forEach(tile => {
      tile.color === "black" ? tile.color = "grey" : tile.color = "black"
    })
  }


  // collidingWithMap(player) {
  //   // debugger
  //   return this.tiles.some(tile => {
  //     return !(
  //       (
  //         player.x < tile.topLeft.x ||
  //         player.x > tile.botRight.x ||
  //         player.y < tile.topLeft.y ||
  //         player.y > tile.botRight.y
  //         )
  //     )
  //   })
  // }
}

// Map.LEVELS = {
//   "1": {

//     "tiles":
//       [
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         0, 2, 2, 2, 0, 0, 3, 3, 3, 0,
//         0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//         1, 1, 1, 1, 1, 1, 1, 1, 1, 1
//       ],
//     "startingPos":
//       [250, 250]
//   }
// }

export default Map