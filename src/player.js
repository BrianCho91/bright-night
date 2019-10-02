class Player {
  constructor() {
    this.width = 50,
    this.height = 50,
    this.color = "blue",
    this.pos = {
      x: 250, // change to level start later
      y: 250
    }
    this.velX = 0;
    this.maxVelX = 3;
    this.velY = 5;
    this.maxVelY = 5;
  }

  draw(ctx) {
    // console.log('j')
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }

  moveLeft() {
    this.velX = -this.maxVelX
  }

  moveRight() {
    this.velX = this.maxVelX
  }

  jump() {
    if (this.pos.y === 600 - this.height) 
      this.velY = -this.maxVelY
  }

  comeDown() {
    this.velY = 5
  }

  stop() {
    this.velX = 0;
  }

  update(dt) {
    // console.log('1')
    if (!dt) return

    this.pos.x += this.velX
    this.pos.x += this.velX
    this.pos.y += this.velY

    if (this.pos.y + this.height > 600)
      this.pos.y = 600 - this.height
  }
  
}

export default Player;