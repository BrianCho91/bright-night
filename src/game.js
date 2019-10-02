import Player from './player';
import Map from './map';
import Controller from './controller';
import Tile from './tile'
import { buildLevel, levels } from './level'

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    // this.map = new Map(ctx);
    // // debugger
    // this.tile = new Tile()
    // this.map = new Map(this.ctx)
    this.player = new Player();
    this.controller = new Controller(this.player, this.map, this.ctx);
    this.tiles = [];
    // // this.controller = new Controller(this.player, this.map, ctx)
    // // this.keyboardHandlers(ctx)
    // this.render(ctx);
  };

  draw(ctx) {
    // debugger
    ctx.clearRect(0, 0, 1000, 600)
    this.tiles.forEach(tile => tile.draw(ctx))
    // this.map.render(ctx)
    this.player.draw(ctx)
  }

  start() {
    // debugger
    this.tiles = buildLevel(levels[1].tiles, this)
    this.lastTime = 0;
    this.controller.keyboardHandlers();
    requestAnimationFrame(this.animate.bind(this))
  }

  animate(time) {
    const dt = time - this.lastTime;
    this.draw(this.ctx)
    this.player.update(dt)
    this.tiles.forEach(tile => tile.update())
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