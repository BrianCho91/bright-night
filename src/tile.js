import { detectCollisionTop, detectCollisionLeft, detectCollision } from './collision';

class Tile {
  constructor(pos, width, height, color, game) {
    // debugger
    this.width = width,
      this.height = height,
      this.color = color,
      this.pos = pos,
      this.game = game
    // this.pos = {
    //   x: 250, // change to level start later
    //   y: 250
    // }
    // this.update();
  }

  draw(ctx) {
    // console.log('j')
    // debugger
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }

  update() {
    // debugger
    if
      (
      detectCollision(this, this.game.player) &&
      this.color === "black"
      // this.game.player.jumping === false
    ) {
      console.log(this)
      // console.log(this.game.player)
      this.game.player.velY = 0
    }

      // if 
      //   (
      //     detectCollisionLeft(this.game.player, this) &&
      //     this.color === "black"
      //   ) {
      //   console.log(this)
      //   // console.log(this.game.player)
      //     this.game.player.velX = 0;
      //   }
      }
    //   // if (detectCollisionX(this, this.game.player)) {
    //   //   console.log('x')
    //   //   this.game.player.velX = 0;
    //   // }

    // if (detectCollision(this, this.game.player) && this.color === "black") {
    //   console.log(this.pos)
    //   this.game.player.velY = 0
    // }

  // }






}

export default Tile;