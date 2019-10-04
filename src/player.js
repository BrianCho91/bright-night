import { detectCollisionLeft } from './collision';
import Map from './map';
import Entity from './entity';

class Player extends Entity {
  constructor(x, y) {
    super(x, y)
    this.width = 24,
      this.height = 24,
      this.color = "blue",
      // this.pos = {
      //   x: 20, // change to level start later
      //   y: 20
      // }
    this.velX = 0;
    this.maxVelX = 3;
    this.velY = 0;
    this.maxVelY = 8;
    this.gravity = 3;
    this.jumping = false
    // this.topLeft = {
    //   x: this.pos.x,
    //   y: this.pos.y - this.height
    // }
    // this.botRight = {
    //   x: this.pos.x + this.width,
    //   y: this.pos.y
    // }

    // this.top = this.pos.y
    // this.left = this.pos.x
    // this.bot = this.pos.y + this.height;
    // this.right = this.pos.x + this.width
  }

  draw(ctx) {
    // console.log('j')
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  }

  moveLeft() {
    // debugger
    // if (this.map.collidingWithMap(this.topLeft)) {
    //   console.log('hi')  
    //   return
    // }
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
    this.velY = this.gravity
  }

  stop() {
    this.velX = 0;
  }

  update(dt) {
    // console.log(this.pos)
    if (!dt) return

    this.pos.x += this.velX
    this.pos.x += this.velX
    this.pos.y += this.velY + this.gravity
    // if (this.pos.y + this.height > 600) {
    //   this.pos.y = 600 - this.height
    // }

  }





}

export default Player;