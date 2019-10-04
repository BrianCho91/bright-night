class Spike {
  constructor(ctx, posX, posY, color) {
    // // debugger
    this.spike = true
    this.ctx = ctx
    this.pos = {
      x: posX,
      y: posY
    }
    this.color = color
    // this.mode = "black"
    // this.mode === "black" ? this.color = "black" : this.color = "lightgrey"
    // this.width = width,
    //   this.height = height,
    //   this.color = color,
    //   this.pos = pos,
    //   this.game = game
    // this.topLeft = {
    //   x: pos.x,
    //   y: pos.y - this.height
    // }
    // this.botRight = {
    //   x: pos.x + this.width,
    //   y: pos.y
    // }
    // // this.pos = {
    //   x: 250, // change to level start later
    //   y: 250
    // }
    // this.update();
  }

  draw(ctx, posX, posY) {
    ctx.fillStyle = this.color

    for (let i = this.pos.x + 2; i < this.pos.x + 25; i += 4) {
      ctx.fillRect(i, this.pos.y, 2, 25)
    }
    // ctx.fillRect(this.pos.x + 25, this.pos.y, 1, 25)
    // if (this.color === "black") {
    //   // ctx.fillStyle = this.color
    //   // ctx.fillRect(this.pos.x, this.pos.y, 25, 25)
    //   ctx.fillStyle = "black"
    //   // ctx.fillRect(this.pos.x + 2, this.pos.y, 2, 24)
    //   // ctx.fillRect(this.pos.x + 6, this.pos.y, 2, 24)

    //   for (let i = this.pos.x + 2; i < this.pos.x + 24; i += 4) {
    //     ctx.fillRect(i, this.pos.y, 2, 24)
    //   }
    // } else if (this.color === "grey") {
    //   // ctx.fillStyle = this.color
    //   // ctx.fillRect(this.pos.x, this.pos.y, 25, 25)
    //   ctx.fillStyle = "lightgrey"
    //   // ctx.fillRect(this.pos.x + 2, this.pos.y, 2, 24)
    //   // ctx.fillRect(this.pos.x + 6, this.pos.y, 2, 24)

    //   for (let i = this.pos.x + 2; i < this.pos.x + 24; i += 4) {
    //     ctx.fillRect(i, this.pos.y, 2, 24)
    //   }
    // }
  }

  // drawStar(cx, cy, spikes, outerRadius, innerRadius, ctx) {

  //   var rot = Math.PI / 2 * 3;
  //   var x = cx;
  //   var y = cy;
  //   var step = Math.PI / spikes;

  //   this.ctx.beginPath();
  //   this.ctx.moveTo(cx, cy - outerRadius)
  //   for (let i = 0; i < spikes; i++) {
  //     x = cx + Math.cos(rot) * outerRadius;
  //     y = cy + Math.sin(rot) * outerRadius;
  //     this.ctx.lineTo(x, y)
  //     rot += step

  //     x = cx + Math.cos(rot) * innerRadius;
  //     y = cy + Math.sin(rot) * innerRadius;
  //     this.ctx.lineTo(x, y)
  //     rot += step
  //   }
  //   this.ctx.lineTo(cx, cy - outerRadius);
  //   this.ctx.closePath();
  //   this.ctx.lineWidth = 5;
  //   this.ctx.strokeStyle = 'blue';
  //   this.ctx.stroke();
  //   this.ctx.fillStyle = 'skyblue';
  //   this.ctx.fill();
  // }

}

export default Spike;