
class Map {
  constructor(ctx) {
    this.level = Map.LEVELS[1];
    this.layout = Map.LEVELS[1].tiles;
    this.startingPos = Map.LEVELS[1].startingPos;
    this.flipMap = this.flipMap.bind(this);
    this.ctx = ctx
    // this.flipMap();
    // this.render(ctx);
    // this.render(ctx);
  }

  draw(ctx, posX, posY, tile) {
    // debugger
    let size;
    let color;
    if (tile === 1) {
      size = [100, 100];
      color = "black";
    } else if (tile === 2) {
      size = [100, 20];
      color = "grey"
    } else if (tile === 3) {
      size = [100, 20];
      color = "lightgrey"
    }

    ctx.fillStyle = color
    ctx.fillRect(posX, posY, size[0], size[1]);
  };

  render(ctx) {
    // console.log('rendered')
    for (let i = 0; i < this.layout.length; i++) {
      let tile = this.layout[i];
      let posX = (i % 10) * 100;
      let posY = (Math.floor(i / 10) * 100);
      // console.log(posX, posY)
      if (tile !== 0) {
        this.draw(ctx, posX, posY, tile)
      }
    }
  }

  flipMap(map, ctx) {
    // console.log("flipped")
    // debugger
    for (let i = 0; i < this.layout.length; i++) {
      let tile = this.layout[i];
      if (this.layout[i] === 2) {
        this.level[i] = 3
      } else if (this.layout[i] === 3) {
        this.level[i] = 2
      }
    }
    console.log(this.layout)
  }

}

Map.LEVELS = {
  "1": {

    "tiles": 
      [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 2, 2, 2, 0, 0, 3, 3, 3, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1
      ],
    "startingPos": 
      [ 250, 250]
  }
}

export default Map