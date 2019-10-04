import Tile from './tile';
import Star from './star';
import { levels } from './level'

class Map {
  constructor(level, game, ctx) {
    // debugger
    // this.numLevel = 1
    // debugger
    this.level = level
    this.dupeLevel = this.level.slice(0)
    this.game = game
    this.tiles = [];
    this.ctx = ctx
    this.mode = "white"
  }

  create() {
    // debugger
    let blackTiles = [];
    let whiteTiles = [];
    this.tiles = []
    // debugger
    this.dupeLevel.forEach((tile, idx) => {
      if (tile !== 0) {
        let pos = {
          x: (idx % 40) * 25,
          y: (Math.floor((idx / 40)) * 25)
        }
        let width = 25;
        let height = 25;
        if (tile === 1) {
          // blackTiles.push(new Tile(pos, width, height, "black", this.game))
          // debugger
          this.tiles.push(new Tile(pos, width, height, "black", this.game))
        }
        if (tile === 2) {
          // blackTiles.push(new Tile(pos, width, height, "green", this.game))

          this.tiles.push(new Tile(pos, width, height, "lightgrey", this.game))
        }
        if (tile === 9) {
          let height = 20
          let star = true
          // blackTiles.push(new Tile(pos, height, "red", this.game))
          this.tiles.push(new Tile(pos, width, height, "red", this.game))
          // this.tiles.push(new Star(pos.x, pos.y, 5, 10, 15, star, this.ctx))
        }
      }
    })
    // console.log(blackTiles)
    // return blackTiles;
    return this.tiles
  }

  flipTiles() {
    // debugger
    for (let i = 0; i < this.dupeLevel.length; i++) {
      // debugger
      if (this.dupeLevel[i] === 1) {
        this.dupeLevel[i] = 2
      } else if (this.dupeLevel[i] === 2) {
        this.dupeLevel[i] = 1
      }
    }
  }

  flipMap() {

    // for (let i = 0; i < this.level.length; i++) {
    //   if (this.mode === "white") {
    //     if (this.level[i] === 1) {
    //       this.level[i].color = "white"
    //   } else if (this.level[i] === 2) {
    //       this.level[i] = "grey"
    //     }
    //   } else {
    //     if (this.level[i] === 1) {
    //       this.level[i].color = "white"
    //     } else if (this.level[i] === 2) {
    //       this.level[i] = "lightgrey"
    //     }
    //   }

    // }

    // this.level.forEach(tile => {
    //   // debugger
    //   tile === 1 ? tile = 2 : tile = 1
    //   tile === 2 ? tile = 1 : tile = 2
    // })
    // this.tiles = [];
    // this.create();

    // this.tiles.forEach(tile => {
    //   if (tile.color === "black") {
    //     tile.color = "lightgrey"
    //   } else if (tile.color === "lightgrey") {
    //     tile.color = "black"
    //   }
    // })

    this.tiles.forEach(tile => {
      if (this.mode === "white") {
        if (tile.color === "black") {
          tile.color = "grey"
        } else if (tile.color === "lightgrey") {
          tile.color = "white"
        }
      } else {
        if (tile.color === "grey") {
          tile.color = "black"
        } else if (tile.color === "white") {
          tile.color = "lightgrey"
        }
      }
    })

    if (this.mode === "white") {
      this.ctx.fillStyle = "black"
      this.ctx.fillRect(0, 0, 1000, 600)
      this.mode = "black"
      this.game.mode = "black"
    } else {
      this.mode = "white"
      this.game.mode = "white"
    }
  }
}

export default Map