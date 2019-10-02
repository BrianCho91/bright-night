

// class Player {
//   constructor(options) {
//     this.pos = this.pos || options.pos,
//     this.initVel = 0,
//     this.maxVel = 4
//     this.width = 50,
//     this.height = 50
//     this.color = options.color || "blue"
//   };

//   draw(ctx) {
//     // ctx.clearRect(0, 0, 1000, 600);
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
//   };
  
//   move(direction) {
//     const newX = this.pos[0] + (Player.MOVES[direction][0] * this.vel);
//     const newY = this.pos[1] + (Player.MOVES[direction][1] * this.vel);
//     const newPos = [newX, newY];
//     this.pos = newPos
//   };

//   jump() {
//     const posX = this.pos[0];
//     const newY = this.pos[1] - 40;

//     const newPos = [posX, newY]
//     this.pos = newPos
//   }

//   update(deltaTime) {
//     if (!deltaTime) return;

//     this.pos[0] = this.pos[0]
//     this.pos[1] = this.pos[1]
//   }

// };



// Player.MOVES = {
//   "up" : [0, -1],
//   "down": [0, 1],
//   "left": [-1, 0],
//   "right": [1, 0],

//   "up-left": [-1,-1],
//   "up-right": [1, -1],
//   "down-left": [-1, 1],
//   "down-right": [1, 1]
// };


// export default Player;