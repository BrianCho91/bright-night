import Player from './player1';
import Map from './map';

class Controller {
  constructor(player, map, ctx) {
    this.player = player;
    this.map = map;
    this.ctx = ctx
    this.keyboardHandlers = this.keyboardHandlers.bind(this);

    // this.keyboardHandlers();
  }

  keyboardHandlers() {

    // document.addEventListener("keypress", (e) => {
    //   if (e.keyCode === 38 || 87) {
    //     this.player.jumping = false;
    //     this.player.jump();
    //     // break;
    //   }
    // })

    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 38 && 87: // up arrow
          // console.log("w")
          this.player.jumping = false;
          this.player.jump();
          break;

        case 40 && 83: // down arrow

          this.player.move("down");
          // console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        case 37 && 65: // left arrow

          this.player.moveLeft(); 
          break;

        case 39 && 68: // right arrow

          this.player.moveRight();
          break;

        case 32: // space
        // debugger
          this.map.flipMap();

        // case 38 && 39: // doesnt work
        //   console.log('upright')
        //   break;

        // case 13: // enter
        //   if (this.game.menu === true) {

        //   } else {

        //   }

        default:
          break;
      }
    })

    document.addEventListener("keyup", (e) => {
      // debugger
      switch (e.keyCode) {
        case 38 && 87: // up arrow
          // console.log("w")
          if (this.player.velY < 5)
            this.player.comeDown()
          break;

        case 40 && 83: // down arrow

          if (this.player.velY > 0)
            this.player.stop();
          break;

        case 37 && 65: // left arrow
          if (this.player.velX < 0)
            this.player.stop();
          break;

        case 39 && 68: // right arrow
          if (this.player.velX > 0)
            this.player.stop();
          break;

        // case 32: // space
        //   this.map.flipMap(this.ctx);

        // case 38 && 39: // doeswnt work
        //   console.log('upright')
        //   break;

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