class Collision {
  constructor(map) {
    // this.player = player
    // debugger
    this.map = map.level
    // console.log(map)
  }

  isColliding(entity) {
    // debugger
    if (entity.getBot() > 600) entity.setBot(600);
    if (entity.getLeft() < 0) entity.setLeft(0);
    if (entity.getRight() > 1000) entity.setRight(1000);


    let top, bot, right, left, value;
// debugger
    top = Math.floor(entity.getTop() / 50)
    left = Math.floor(entity.getLeft() / 50)
    value = this.map[top * 20 + left]
    // console.log('one' + value)
    this.collide(value, entity, left * 50, top * 50)

    top = Math.floor(entity.getTop() / 50)
    right = Math.floor(entity.getRight() / 50)
    value = this.map[top * 20 + right]
    this.collide(value, entity, right * 50, top * 50)

    bot = Math.floor(entity.getBot() / 50)
    left = Math.floor(entity.getLeft() / 50)
    value = this.map[bot * 20 + left]
    this.collide(value, entity, left * 50, bot * 50)

    bot = Math.floor(entity.getBot() / 50)
    right = Math.floor(entity.getRight() / 50)
    value = this.map[bot * 20 + right]
    this.collide(value, entity, right * 50, bot * 50)
    
  }

  collide(value, entity, tileX, tileY) {
    // debugger
    if (value !== 0) {
      if (this.collidePlatTop(entity, tileY)) return;
      else if (this.collidePlatBot(entity, tileY + 50)) return;
      else if (this.collidePlatLeft(entity, tileX)) return;
      else if (this.collidePlatRight(entity, tileX + 50)) return;
    }
  }

  collidePlatTop(entity, tileTop) {
    if (entity.getBot() > tileTop && entity.getPastBot() <= tileTop) {
      entity.setBot(tileTop - 0.01);
      entity.velY = 0;
      // debugger
      // console.log(tileTop)
      return true
    }
    return false;
  }

  collidePlatRight(entity, tileRight) {
    if (entity.getLeft() > tileRight && entity.getPastRight() <= tileRight) {
      entity.setLeft(tileRight + 0.01)
      // debugger
      // console.log(tileRight)
      return true
    }
    return false
  }

  collidePlatBot(entity, tileBot) {
    if (entity.getTop() < tileBot && entity.getPastTop() >= tileBot) {
      entity.setTop(tileBot + 0.01);
      // console.log(tileBot)
      entity.velY = 3;
      return true;
    }
    return false;
  }

  collidePlatLeft(entity, tileLeft) {
    if (entity.getRight() > tileLeft && entity.getRight() <= tileLeft) {
      entity.setRight(tileLeft - 0.01)
      // console.log(tileRight)
      return true
    }
    return false;
  }


}

export default Collision
