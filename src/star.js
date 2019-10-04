class Star {
  constructor(x, y, spikes, outerRadius, innerRadius, star, ctx) {
    // // debugger
    this.star = true
    this.ctx = ctx
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

  drawStar(cx, cy, spikes, outerRadius, innerRadius, ctx) {

    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy - outerRadius)
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      this.ctx.lineTo(x, y)
      rot += step

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      this.ctx.lineTo(x, y)
      rot += step
    }
    this.ctx.lineTo(cx, cy - outerRadius);
    this.ctx.closePath();
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = 'blue';
    this.ctx.stroke();
    this.ctx.fillStyle = 'skyblue';
    this.ctx.fill();
  }

}

export default Star;