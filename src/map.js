import Tile from './tile';
import Star from './star';
import Spike from './spike'

class Map {
  constructor(level, game, ctx) {
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
          // debugger
          this.tiles.push(new Tile(pos, width, height, "black", this.game))
        }
        if (tile === 2) {

          this.tiles.push(new Tile(pos, width, height, "lightgrey", this.game))
        }
        if (tile === 3) {
          this.tiles.push(new Spike(this.ctx, pos.x, pos.y, "black", false))
        }
        if (tile === 4) {
          this.tiles.push(new Spike(this.ctx, pos.x, pos.y, "lightgrey", false))
        }
        if (tile === 5) {
          this.tiles.push(new Spike(this.ctx, pos.x, pos.y, "black", true))
        }
        if (tile === 9) {
          this.tiles.push(new Star(this.ctx, pos.x, pos.y))
        }
      }
    })
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