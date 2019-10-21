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
  }

  draw(ctx) {
    // debugger
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }
}

export default Tile;