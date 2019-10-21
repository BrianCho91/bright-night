class Star {
  constructor(ctx, posX, posY) {
    // // debugger
    this.star = true
    this.ctx = ctx
    this.pos = {
      x: posX,
      y: posY
    }
  }

  draw(ctx) {
    let radius = 12;
    let points = 5
    let m = 0.5
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.pos.x, this.pos.y);
    ctx.moveTo(0, 0 - radius);
    for (let i = 0; i < points; i++) {
      ctx.rotate(Math.PI / points);
      ctx.lineTo(0, 0 - (radius * m));
      ctx.rotate(Math.PI / points);
      ctx.lineTo(0, 0 - radius);
    }
    ctx.fillStyle = "red"
    ctx.fill();
    ctx.restore();
  }
}

export default Star;