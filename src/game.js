import Player from './player';
import Map from './map';
import Controller from './controller';
import Tile from './tile'
import { buildLevel, levels } from './level'
// import levels from './level'
import Collision from './collision';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    // this.map = new Map(ctx);
    // // debugger
    // this.tile = new Tile()
    // this.map = new Map(this.ctx)
    this.level = 1
    this.map = new Map(levels[this.level].tiles, this, this.ctx);
    this.startingPos = levels[this.level].startingPos
    this.player = new Player(this.startingPos[0], this.startingPos[1], this.map);
    // this.map = new Map(this)
    // debugger
    this.controller = new Controller(this.player, this.map, this.ctx, this);
    this.collision = new Collision(this.map, this, this.player)
    this.tiles = [];
    this.color = "black"
    // this.gameOver = true
    this.deathCount = 0
    this.mode = "white"
    // // this.controller = new Controller(this.player, this.map, ctx)
    // // this.keyboardHandlers(ctx)
    // this.render(ctx);
  };

  changeLevel() {
    // debugger
    this.level += 1
    this.startingPos = levels[this.level].startingPos
    this.map = new Map(levels[this.level].tiles, this, this.ctx);
    this.player = new Player(this.startingPos[0], this.startingPos[1], this.map);
    this.controller = new Controller(this.player, this.map, this.ctx, this);
    this.collision = new Collision(this.map, this, this.player)
    this.map.tiles = [];
    this.map.create()
  }

  draw(ctx) {
    // debugger
    if (this.map.mode === "white") {
      ctx.clearRect(0, 0, 1000, 600) 
    } else {
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 1000, 600)
    }
    // ctx.clearRect(0, 0, 1000, 600)
    // debugger
    // this.tiles.forEach(tile => tile.draw(ctx))
    this.player.draw(ctx)
    this.map.tiles.forEach(tile => {
      // debugger
      tile.star ? tile.draw(ctx) : tile.draw(ctx)
    })
    // this.map.render(ctx)

    if (this.map.mode === "white") {
      ctx.font = "25px Roboto";
      ctx.fillStyle = "black"
      ctx.fillText("Level: " + this.level, 30, 54)

      ctx.font = "25px Roboto"; // death counter
      ctx.fillText(this.deathCount, 165, 54)

      ctx.fillStyle = "black"
      ctx.fillRect(130, 35, 25, 15) // head
      ctx.fillRect(135, 50, 15, 8) // teeth
      ctx.fillStyle = "white" 
      ctx.fillRect(136, 39, 5, 6) // eyes
      ctx.fillRect(144, 39, 5, 6)
      
      ctx.fillRect(139, 53, 1, 9) // teeth
      ctx.fillRect(142, 53, 1, 9)
      ctx.fillRect(145, 53, 1, 9)
    } else {
      ctx.font = "25px Roboto";
      ctx.fillStyle = "white"
      ctx.fillText("Level: " + this.level, 30, 54)

      ctx.font = "25px Roboto"; // death counter
      ctx.fillText(this.deathCount, 165, 54)

      ctx.fillStyle = "white"
      ctx.fillRect(130, 35, 25, 15) // head
      ctx.fillRect(135, 50, 15, 8) // teeth
      ctx.fillStyle = "black"
      ctx.fillRect(136, 39, 5, 6) // eyes
      ctx.fillRect(144, 39, 5, 6)

      ctx.fillRect(139, 53, 1, 9) // teeth
      ctx.fillRect(142, 53, 1, 9)
      ctx.fillRect(145, 53, 1, 9)
    }
  }

  start() {
    // debugger
    // this.tiles = buildLevel(levels[1].tiles, this)
    // this.gameOver = false
    this.map.create(levels[1].tiles, this);
    // this.map.create(this)
    this.lastTime = 0;

    // this.controller.keyboardHandlers();
    requestAnimationFrame(this.animate.bind(this))
  }

  animate(time) {
    const dt = time - this.lastTime;

    this.gameOver()
    this.draw(this.ctx)
    // this.tiles.forEach(tile => tile.update())
    this.player.update(dt)
    this.collision.isColliding(this.player)
    // this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this))
  }

  gameOver() {
    if (this.player.pos.y > 500) {
      // debugger
      this.deathCount += 1
      this.startingPos = levels[this.level].startingPos
      // if (this.map.mode === "black") this.map.flipTiles()
      this.map = new Map(levels[this.level].tiles, this, this.ctx);
      this.player = new Player(this.startingPos[0], this.startingPos[1], this.map);
      this.controller = new Controller(this.player, this.map, this.ctx, this);
      this.collision = new Collision(this.map, this, this.player)
      this.map.tiles = [];
      this.map.create()
    } 
  }

}

const CONSTANTS = {
  GRAVITY: 0.4
}

export default Game;