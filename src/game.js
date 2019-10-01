import Player from './player';
import Map from './map';
import Controller from './controller';

class Game {
  constructor(ctx) {
    this.map = new Map(ctx);
    // debugger
    this.player = new Player( {pos: this.map.startingPos});
    // this.controller = new Controller(this.player, this.map, ctx)
    // this.keyboardHandlers(ctx)
    this.render(ctx);
  };

  render(ctx) {
    // debugger
    ctx.clearRect(0, 0, 1000, 600)

    this.map.render(ctx)
    this.player.draw(ctx)
  }
}

const CONSTANTS = {
  GRAVITY: 0.4
}

export default Game;