import Game from './game';
import Controller from './controller';
import { request } from 'http';

class GameView {
  constructor(ctx) {
    this.game = new Game(ctx)
    // this.controller = new Controller(this.game.player, this.game.map, ctx)
    // this.keyboardHandlers(ctx);
  }

  // animate(time) {
  //   const timeDelta
  // }

  // render(ctx) {
  //   // debugger
  //   ctx.clearRect(0, 0, 1000, 600)

  //   this.map.render(ctx)
  //   this.player.draw(ctx)
  // }



  // keyboardHandlers(ctx) {
  //   console.log('clear')
  //   ctx.clearRect(0, 0, 1000, 600);
  //   this.controller.keyboardHandlers()
  //   this.game.render(ctx)
  // }

  // animate() {
  //   ctx.clearRect(0, 0, 1000, 600);
  //   requestAnimationFrame(this.animate.bind(this))
  // }

  // start(ctx) {
  //   let that = this;
  //   // this.keyboardHandlers(ctx);
  //   // this.animate();


  // }

}

export default GameView;