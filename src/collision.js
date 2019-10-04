class Collision {
  constructor(map) {
    // this.player = player
    // debugger
    this.map = map.level
    // console.log(map)
  }

  isColliding(entity) {
    // debugger
    if (entity.getBot() > 500) entity.setBot(500);
    if (entity.getLeft() < 0) entity.setLeft(0);
    if (entity.getRight() > 1000) entity.setRight(1000);


    let top, bot, right, left, value;
// debugger

    bot = Math.floor(entity.getBot() / 25)
    left = Math.floor(entity.getLeft() / 25)
    value = this.map[bot * 40 + left]
    this.collide(value, entity, left * 25, bot * 25)

    bot = Math.floor(entity.getBot() / 25)
    right = Math.floor(entity.getRight() / 25)
    value = this.map[bot * 40 + right]
    this.collide(value, entity, right * 25, bot * 25)
    
    top = Math.floor(entity.getTop() / 25)
    left = Math.floor(entity.getLeft() / 25)
    value = this.map[top * 40 + left]
    // console.log('one' + value)
    this.collide(value, entity, left * 25, top * 25)

    top = Math.floor(entity.getTop() / 25)
    right = Math.floor(entity.getRight() / 25)
    value = this.map[top * 40 + right]
    this.collide(value, entity, right * 25, top * 25)


  }

  collide(value, entity, tileX, tileY) {
    // debugger
    // console.log(value, tileX, tileY)
    if (value === 1) {
      if (this.collidePlatTop(entity, tileX, tileY)) return;
      if (this.collidePlatBot(entity, tileX, tileY + 25)) return;
      if (this.collidePlatLeft(entity, tileX, tileY)) return;
      if (this.collidePlatRight(entity, tileX + 25, tileY)) return;
    }
  }

  collidePlatTop(entity, tileX, tileY) {
    // console.log('top')
    // debugger
    // if (entity.getBot() > tileY && entity.getPastBot() <= tileY) {
    if (entity.getBot() > tileY && entity.getBot() < tileY + 24 && entity.getLeft() != tileX && entity.getRight() > tileX) {
    // if (entity.getBot() > tileY) {
      console.log('top')
      // entity.setPastBot(tileY -0.01)
      entity.setBot(tileY - 0.01);
      entity.velY = 0;
      // debugger
      // console.log(tileY)
      return true
    }
    return false;
  }

  collidePlatRight(entity, tileX, tileY) {
    // if (entity.getLeft() > tileX && entity.getPastLeft() <= tileX) {
      console.log('hit')
    if (entity.getLeft() < tileX && entity.getTop() < tileY + 24 && entity.getBot() > tileY) {
      
      console.log('right')
      // debugger
      // entity.setPastLeft(tileX + 0.01)
      entity.setLeft(tileX + 0.01)
      // entity.velX = 0;
      // debugger
      // console.log(tileX)
      return true
    }
    return false
  }

  collidePlatBot(entity, tileX, tileY) {

    // if (entity.getTop() < tileY && entity.getPastTop() >= tileY) {
    if (entity.getTop() < tileY && entity.getTop() > tileY - 24 && entity.getLeft() != tileX && entity.getRight() > tileX ) {
      console.log('bot')
      // entity.setPastTop(tileY + 0.01)
      entity.setTop(tileY + 0.01);
      // console.log(tileY)
      entity.velY = 0;
      return true;
    }
    return false;
  }

  collidePlatLeft(entity, tileX, tileY) {
    // if (entity.getRight() > tileX && entity.getPastRight() <= tileX) {
    // if (entity.getRight() > tileX && entity.getTop() < tileY + 24 && entity.getBot() > tileY) { 
      if (entity.getRight() > tileX && entity.getRight() < tileX + 24 && entity.getTop() < tileY + 24 && entity.getBot() > tileY) {
      console.log('left')
      // entity.setPastRight(tileX - 0.01)
      entity.setRight(tileX - 0.01)
      // console.log(tileX)
      entity.velX = 0
      return true
    }
    return false;
  }


}

export default Collision
