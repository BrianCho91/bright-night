class Collision {
  constructor(map, game, player) {
    this.player = player
    // debugger
    this.map = map
    this.game = game
    this.level = map.dupeLevel
  }

  isColliding(entity) {
    // debugger
    if (entity.getLeft() < 0) entity.setLeft(0);
    if (entity.getRight() > 1000) entity.setRight(1000);

    let top, bot, right, left, value;

    bot = Math.floor(entity.getBot() / 25)
    left = Math.floor(entity.getLeft() / 25)
    value = this.level[bot * 40 + left]
    this.collide(value, entity, left * 25, bot * 25)

    bot = Math.floor(entity.getBot() / 25)
    right = Math.floor(entity.getRight() / 25)
    value = this.level[bot * 40 + right]
    this.collide(value, entity, right * 25, bot * 25)

    top = Math.floor(entity.getTop() / 25)
    left = Math.floor(entity.getLeft() / 25)
    value = this.level[top * 40 + left]
    this.collide(value, entity, left * 25, top * 25)

    top = Math.floor(entity.getTop() / 25)
    right = Math.floor(entity.getRight() / 25)
    value = this.level[top * 40 + right]
    this.collide(value, entity, right * 25, top * 25)


  }

  collide(value, entity, tileX, tileY) {
    if (value === 1) {
      if (this.collidePlatTop(entity, tileX, tileY)) return;
      if (this.collidePlatBot(entity, tileX, tileY + 25)) return;
      if (this.collidePlatLeft(entity, tileX, tileY)) return;
      if (this.collidePlatRight(entity, tileX + 25, tileY)) return;
    }
    else if (value === 3 || value === 4) {
      if (this.collidePlatTopHazard(entity, tileX, tileY)) return;
      if (this.collidePlatBotHazard(entity, tileX, tileY + 25)) return;
      if (this.collidePlatLeftHazard(entity, tileX, tileY)) return;
      if (this.collidePlatRightHazard(entity, tileX + 25, tileY)) return;
    }
    else if (value === 9) {
      if (this.collidePlatTopFin(entity, tileX, tileY)) return;
      if (this.collidePlatBotFin(entity, tileX, tileY + 25)) return;
      if (this.collidePlatLeftFin(entity, tileX, tileY)) return;
      if (this.collidePlatRightFin(entity, tileX + 25, tileY)) return;
    }
  }

  collidePlatTop(entity, tileX, tileY) {
    if (entity.getBot() > tileY && entity.getBot() < tileY + 24 && entity.getLeft() != tileX && entity.getRight() > tileX) {
      entity.setBot(tileY - 0.001);
      entity.velY = 0;
      this.player.jumping = false
      // debugger
      return true
    }
    return false;
  }

  collidePlatRight(entity, tileX, tileY) {
    if (entity.getLeft() < tileX && entity.getTop() < tileY + 24 && entity.getBot() > tileY) {
      // debugger
      entity.setLeft(tileX + 0.01)
      entity.velX = 0
      return true
    }
    return false
  }

  collidePlatBot(entity, tileX, tileY) {
    if (entity.getTop() < tileY && entity.getTop() > tileY - 24 && entity.getLeft() != tileX && entity.getRight() > tileX) {
      entity.setTop(tileY + 0.01);
      entity.velY = 0;
      return true;
    }
    return false;
  }

  collidePlatLeft(entity, tileX, tileY) {
    if (entity.getRight() > tileX && entity.getRight() < tileX + 24 && entity.getTop() < tileY + 24 && entity.getBot() > tileY) {
      entity.setRight(tileX - 0.01)
      entity.velX = 0
      return true
    }
    return false;
  }

  collidePlatTopFin(entity, tileX, tileY) {
    // debugger
    if (entity.getBot() > tileY && entity.getBot() < tileY + 24 && entity.getLeft() != tileX && entity.getRight() > tileX) {
      // debugger
      this.game.changeLevel()
      entity.setBot(tileY - 0.01);
      entity.velY = 0;
      // debugger
      return true
    }
    return false;
  }

  collidePlatRightFin(entity, tileX, tileY) {
    if (entity.getLeft() < tileX && entity.getTop() < tileY + 24 && entity.getBot() > tileY) {
      // debugger
      this.game.changeLevel()
      entity.setLeft(tileX + 0.01)
      entity.velX = 0;
      // debugger
      return true
    }
    return false
  }

  collidePlatBotFin(entity, tileX, tileY) {
    if (entity.getTop() < tileY && entity.getTop() > tileY - 24 && entity.getLeft() != tileX && entity.getRight() > tileX) {
      this.game.changeLevel()
      entity.setTop(tileY + 0.01);
      entity.velY = 0;
      return true;
    }
    return false;
  }

  collidePlatLeftFin(entity, tileX, tileY) {
    if (entity.getRight() > tileX && entity.getRight() < tileX + 24 && entity.getTop() < tileY + 24 && entity.getBot() > tileY) {
      this.game.changeLevel()
      entity.setRight(tileX - 0.01)
      entity.velX = 0
      return true
    }
    return false;
  }

  collidePlatTopHazard(entity, tileX, tileY) {
    // debugger
    if (entity.getBot() > tileY && entity.getBot() < tileY + 24 && entity.getLeft() != tileX && entity.getRight() > tileX) {
      // debugger
      this.game.die()
      entity.setBot(tileY - 0.01);
      entity.velY = 0;
      // debugger
      return true
    }
    return false;
  }

  collidePlatRightHazard(entity, tileX, tileY) {
    if (entity.getLeft() < tileX && entity.getTop() < tileY + 24 && entity.getBot() > tileY) {
      // debugger
      this.game.die()
      entity.setLeft(tileX + 0.01)
      entity.velX = 0;
      // debugger
      return true
    }
    return false
  }

  collidePlatBotHazard(entity, tileX, tileY) {
    if (entity.getTop() < tileY && entity.getTop() > tileY - 24 && entity.getLeft() != tileX && entity.getRight() > tileX) {
      this.game.die()
      entity.setTop(tileY + 0.01);
      entity.velY = 0;
      return true;
    }
    return false;
  }

  collidePlatLeftHazard(entity, tileX, tileY) {
    if (entity.getRight() > tileX && entity.getRight() < tileX + 24 && entity.getTop() < tileY + 24 && entity.getBot() > tileY) {
      this.game.die()
      entity.setRight(tileX - 0.01)
      entity.velX = 0
      return true
    }
    return false;
  }
}

export default Collision
