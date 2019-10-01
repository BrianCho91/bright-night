import Player from './player';

class Controller {
  constructor(player, ctx) {
    this.player = player
    this.ctx = ctx
    this.keyboardHandlers = this.keyboardHandlers.bind(this);
  }

  keyboardHandlers() {
    window.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 38: // up arrow
          // console.log("w")
          this.player.jump();
          console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        case 40: // down arrow

          this.player.move("down");
          console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        case 37: // left arrow

          this.player.move("left")
          console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        case 39: // right arrow

          this.player.move("right");
          console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        // case 13: // enter
        //   if (this.game.menu === true) {

        //   } else {

        //   }

        default:
          break;
      }
    })
  }

}

export default Controller;