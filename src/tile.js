import { detectCollisionTop, detectCollisionLeft, detectCollision } from './collision';

class Tile {
  constructor(pos, width, height, color, game, star) {
    // debugger
    this.width = width,
      this.height = height,
      this.color = color,
      this.pos = pos,
      this.game = game
      this.topLeft = {
        x: pos.x,
        y: pos.y - this.height
      }
      this.botRight = {
        x: pos.x + this.width,
        y: pos.y
      }
      this.star = false
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

  // drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {

  //   var rot = Math.PI / 2 * 3;
  //   var x = cx;
  //   var y = cy;
  //   var step = Math.PI / spikes;

  //   ctx.beginPath();
  //   ctx.moveTo(cx, cy - outerRadius)
  //   for (i = 0; i < spikes; i++) {
  //     x = cx + Math.cos(rot) * outerRadius;
  //     y = cy + Math.sin(rot) * outerRadius;
  //     ctx.lineTo(x, y)
  //     rot += step

  //     x = cx + Math.cos(rot) * innerRadius;
  //     y = cy + Math.sin(rot) * innerRadius;
  //     ctx.lineTo(x, y)
  //     rot += step
  //   }
  //   ctx.lineTo(cx, cy - outerRadius);
  //   ctx.closePath();
  //   ctx.lineWidth = 5;
  //   ctx.strokeStyle = 'blue';
  //   ctx.stroke();
  //   ctx.fillStyle = 'skyblue';
  //   ctx.fill();
  // }

  update() {
    // debugger
    // if
    //   (
    //   detectCollision(this, this.game.player) &&
    //   this.color === "black"
    //   // this.game.player.jumping === false
    // ) {
    //   console.log(this)
    //   // console.log(this.game.player)
    //   this.game.player.velY = 0
    // }

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