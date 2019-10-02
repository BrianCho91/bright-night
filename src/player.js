import { detectCollisionLeft } from './collision';
import Map from './map';

class Player {
  constructor(map) {
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
    this.jumping = false
    this.topLeft = {
      x: this.pos.x,
      y: this.pos.y - this.height
    }
    this.botRight = {
      x: this.pos.x + this.width,
      y: this.pos.y
    }
    this.map = map;

  }

  draw(ctx) {
    // console.log('j')
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }

  moveLeft() {
    debugger
    if (this.map.collidingWithMap(this.topLeft)) {
      console.log('hi')  
      return
    }
    this.velX = -this.maxVelX
  }

  moveRight() {
    this.velX = this.maxVelX
  }

  jump() {
    if (this.pos.y === 600 - this.height)
      // if (!this.jumping) {
      this.jumping = true
      this.velY = -this.maxVelY
    // }
  }

  comeDown() {
    this.jumping = false
    this.velY = 5
  }

  stop() {
    this.velX = 0;
  }

  update(dt) {
    // console.log(this.pos)
    if (!dt) return

    this.pos.x += this.velX
    this.pos.x += this.velX
    this.pos.y += this.velY

    // if (this.pos.y + this.height > 600) {
    //   this.pos.y = 600 - this.height
    // }

  }





}

export default Player;