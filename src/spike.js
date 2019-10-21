class Spike {
  constructor(ctx, posX, posY, color, upsideDown) {
    // // debugger
    this.spike = true
    this.ctx = ctx
    this.pos = {
      x: posX,
      y: posY
    }
    this.color = color
    this.upsideDown = upsideDown;
  }

  draw(ctx) {
    if (this.upsideDown === false) {
      ctx.fillStyle = this.color
      ctx.fillRect(this.pos.x, this.pos.y + 12, 25, 13)

      for (let i = this.pos.x + 2; i < this.pos.x + 25; i += 4) {
        ctx.fillRect(i, this.pos.y, 2, 25)
      }
    } else {
      ctx.fillStyle = this.color
      ctx.fillRect(this.pos.x, this.pos.y, 25, 12)

      for (let i = this.pos.x + 2; i < this.pos.x + 25; i += 4) {
        ctx.fillRect(i, this.pos.y, 2, 25)
      }
    }
  }
}

export default Spike;