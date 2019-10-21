import Entity from './entity';

class Player extends Entity {
  constructor(x, y, map) {
    super(x, y, map)
    this.width = 24,
      this.height = 24,
      this.color = "blue",

    this.velX = 0;
    this.maxVelX = 3;
    this.velY = 0;
    this.maxVelY = 8;
    this.gravity = 5;
    this.speedY = 0
    this.jumping = false
    this.map = map
    this.right = true
  }

    draw(ctx) {
    if (this.map.mode === "white") {
      if (this.right === true) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.pos.x, this.pos.y + 10, this.width, 11) // body
        ctx.fillStyle = "white";
        ctx.fillRect(this.pos.x + 4, this.pos.y + 13, 1, 8) // arm
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x + 2, this.pos.y + 1, this.width - 4, 8) // face outline
        ctx.fillStyle = "white"
        ctx.fillRect(this.pos.x + 4, this.pos.y + 2, this.width - 8, 8) // face
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x + 10, this.pos.y + 3, 2, 6) // eyes
        ctx.fillRect(this.pos.x + 16, this.pos.y + 3, 2, 6) // eyes
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x + 14, this.pos.y + 22, 8, 2) // feet
        ctx.fillRect(this.pos.x + 3, this.pos.y + 22, 8, 2) 
      } else {
        ctx.fillStyle = "black";
        ctx.fillRect(this.pos.x, this.pos.y + 10, this.width, 11) // body
        ctx.fillStyle = "white";
        ctx.fillRect(this.pos.x + 20, this.pos.y + 13, 1, 8)
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x + 2, this.pos.y + 1, this.width - 4, 8) // face outline
        ctx.fillStyle = "white"
        ctx.fillRect(this.pos.x + 4, this.pos.y + 2, this.width - 8, 8) // face
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x + 6, this.pos.y + 3, 2, 6) // eyes
        ctx.fillRect(this.pos.x + 12, this.pos.y + 3, 2, 6) // eyes
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x + 14, this.pos.y + 22, 8, 2) // feet
        ctx.fillRect(this.pos.x + 3, this.pos.y + 22, 8, 2) 
      }
    } else {
      if (this.right === true) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.pos.x, this.pos.y + 10, this.width, 11) // body
        ctx.fillStyle = "black";
        ctx.fillRect(this.pos.x + 4, this.pos.y + 13, 1, 8) // arm
        ctx.fillStyle = "white"
        ctx.fillRect(this.pos.x + 2, this.pos.y + 1, this.width - 4, 8) // face outline
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x + 4, this.pos.y + 2, this.width - 8, 8) // face
        ctx.fillStyle = "white"
        ctx.fillRect(this.pos.x + 10, this.pos.y + 3, 2, 6) // eyes
        ctx.fillRect(this.pos.x + 16, this.pos.y + 3, 2, 6) // eyes
        ctx.fillStyle = "white"
        ctx.fillRect(this.pos.x + 14, this.pos.y + 22, 8, 2) // feet
        ctx.fillRect(this.pos.x + 3, this.pos.y + 22, 8, 2)
      } else {
        ctx.fillStyle = "white";
        ctx.fillRect(this.pos.x, this.pos.y + 10, this.width, 11) // body
        ctx.fillStyle = "black";
        ctx.fillRect(this.pos.x + 20, this.pos.y + 13, 1, 8)
        ctx.fillStyle = "white"
        ctx.fillRect(this.pos.x + 2, this.pos.y + 1, this.width - 4, 8) // face outline
        ctx.fillStyle = "black"
        ctx.fillRect(this.pos.x + 4, this.pos.y + 2, this.width - 8, 8) // face
        ctx.fillStyle = "white"
        ctx.fillRect(this.pos.x + 6, this.pos.y + 3, 2, 6) // eyes
        ctx.fillRect(this.pos.x + 12, this.pos.y + 3, 2, 6) // eyes
        ctx.fillStyle = "white"
        ctx.fillRect(this.pos.x + 14, this.pos.y + 22, 8, 2) // feet
        ctx.fillRect(this.pos.x + 3, this.pos.y + 22, 8, 2)
      }
    }
  }

  moveLeft() {
    // debugger
    this.right = false
    this.velX = -this.maxVelX
  }

  moveRight() {
    this.right = true
    this.velX = this.maxVelX
  }

  jump() {
      if (!this.jumping && this.speedY === 0) {
        this.velY = -this.maxVelY
        this.jumping = true
    }
  }

  comeDown() {
    this.velY = this.gravity
  }

  stop() {
    this.velX = 0;
  }

  update(dt) {
    if (!dt) return

    this.pos.x += this.velX
    this.pos.x += this.velX
    this.pos.y += this.velY + this.gravity
  }
}

export default Player;