import Player from './player';
import Controller from './controller';

class Game {
  constructor(options) {
    // this.player = new Player({ pos: [250, 250]})
    // this.refresh = this.refresh.bind(this);
    // this.drawPlayer = this.drawPlayer.bind(this)
    // this.animate = this.animate.bind(this)
    // this.controller = new Controller(this.player)
  };

  // refresh(ctx) {
  //   ctx.clearRect(0, 0, 1000, 600)
  // }

  // drawPlayer(ctx) {
  //   this.player.draw(ctx);
  // }

  // animate(ctx) {
  //   this.refresh(ctx);
  //   this.player.draw(ctx)
  //   requestAnimationFrame(this.animate());
  // }

}

const CONSTANTS = {
  GRAVITY: 0.4
}

export default Game;