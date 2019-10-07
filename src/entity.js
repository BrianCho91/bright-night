class Entity {
  constructor(x, y) {
    this.pos = {
      x: x,
      y: y
    }    
    this.pastPos = {
      x: x,
      y: y
    }
  }

  getTop() {
    return this.pos.y
  }

  getRight() {
    return (this.pos.x + this.width);
  }

  getBot() {
    return (this.pos.y + this.height);
  }

  getLeft() {
    return this.pos.x
  }
  
  getPastTop() {
    return this.pastPos.y
  }

  getPastRight() {
    return (this.pastPos.x + 50);
  }

  getPastBot() {
    return (this.pastPos.y + 50);
  }

  getPastLeft() {
    return this.pastPos.x
  }

  setTop(y) {
    this.pos.y = y
  }

  setRight(x) {
    this.pos.x = (x - this.width)
  }

  setBot(y) {
    this.pos.y = (y - this.height)
  }

  setLeft(x) {
    this.pos.x = x;
  }

  setPastTop(y) {
    this.pastPos.y = y
  }

  setPastRight(x) {
    this.pastPos.x = (x - this.width)
  }

  setPastBot(y) {
    this.pastPos.y = (y - this.height)
  }

  setPastLeft(x) {
    this.pastPos.x = x;
  }




}

export default Entity