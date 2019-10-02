import { detectCollisionTop, detectCollisionX } from './collision';

class Tile {
  constructor(pos, color, game) {
    this.width = 100,
      this.height = 100,
      this.color = color,
      this.pos = pos
    // this.pos = {
    //   x: 250, // change to level start later
    //   y: 250
    // }
    this.game = game
    // this.update();
  }

  draw(ctx) {
    // console.log('j')
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }

  update() {
    // debugger
    if
      (
        detectCollisionTop(this, this.game.player) &&
        this.color === "black"
        // this.game.player.jumping === false
      ) {
        console.log(this)
        console.log(this.game.player)
        this.game.player.velY = 0;
    }
    // if (detectCollisionX(this, this.game.player)) {
    //   console.log('x')
    //   this.game.player.velX = 0;
    // }

  }






}

export default Tile;