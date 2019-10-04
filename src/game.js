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
      tile.star ? tile.drawStar(ctx) : tile.draw(ctx)
    })
    // this.map.render(ctx)
  }

  start() {
    // debugger
    // this.tiles = buildLevel(levels[1].tiles, this)
    this.map.create(levels[1].tiles, this);
    // this.map.create(this)
    this.lastTime = 0;
    // this.controller.keyboardHandlers();
    requestAnimationFrame(this.animate.bind(this))
  }

  animate(time) {
    const dt = time - this.lastTime;
    this.draw(this.ctx)
    // this.tiles.forEach(tile => tile.update())
    this.player.update(dt)
    this.collision.isColliding(this.player)
    // this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this))
  }

  // draw(ctx) {
  //   console.log('cear')
  //   ctx.clearRect(0, 0, 1000, 600)
  // }

  // render(ctx) {
  //   // debugger
  //   ctx.clearRect(0, 0, 1000, 600)

  //   this.map.render(ctx)
  //   this.player.draw(ctx)
  // }
}

const CONSTANTS = {
  GRAVITY: 0.4
}

export default Game;