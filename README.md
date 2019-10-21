# BrightNight

## Description

- Navigate through 8 mind-warping, dimension-bending levels (with more coming soon!)

## Link

* [BrightNight](https://briancho91.github.io/bright-night/)

## Custom built physics

* Includes features to check for object collision on the character, tiles, spikes, and stars.

![gif](https://media.giphy.com/media/Js2OwoNA2cyJFiWSo9/giphy.gif)

* Checks all sides of tiles for collision. 

    <details>
    <summary>Code Snippet (Top Collision)</summary>
    <p>

    ```JavaScript
    isColliding(entity) {

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
        return true
      }
      return false;
    }
    ```

    </p>
    </details>  

## Swap between day and night to allow/prevent object collision.

* Object-oriented programming allows for easy swap between day and night

![gif2](https://media.giphy.com/media/S98DRZZhb9tlbGyDUG/giphy.gif)

* Each tile has a value which changes the type of tile it is. This swaps based on user actions 

    <details>
    <summary>Code Snippet</summary>
    <p>

    ```JavaScript
    create() {
      let blackTiles = [];
      let whiteTiles = [];
      this.tiles = []
      this.dupeLevel.forEach((tile, idx) => {
        if (tile !== 0) {
          let pos = {
            x: (idx % 40) * 25,
            y: (Math.floor((idx / 40)) * 25)
          }
          let width = 25;
          let height = 25;
          if (tile === 1) {
            this.tiles.push(new Tile(pos, width, height, "black", this.game))
          }
          if (tile === 2) {
            this.tiles.push(new Tile(pos, width, height, "lightgrey", this.game))
          }
          if (tile === 3) {
            this.tiles.push(new Spike(this.ctx, pos.x, pos.y, "black", false))
          }
          if (tile === 4) {
            this.tiles.push(new Spike(this.ctx, pos.x, pos.y, "lightgrey", false))
          }
          if (tile === 5) {
            this.tiles.push(new Spike(this.ctx, pos.x, pos.y, "black", true))
          }
          if (tile === 9) {
            let height = 20
            let star = true
            this.tiles.push(new Star(this.ctx, pos.x, pos.y))
          }
        }
      })
      return this.tiles
    }

    flipTiles() {
      for (let i = 0; i < this.dupeLevel.length; i++) {
        if (this.dupeLevel[i] === 1) {
          this.dupeLevel[i] = 2
        } else if (this.dupeLevel[i] === 2) {
          this.dupeLevel[i] = 1
        }
      }
    }

      flipMap() {
        this.tiles.forEach(tile => {
          if (this.mode === "white") {
            if (tile.color === "black") {
              tile.color = "grey"
            } else if (tile.color === "lightgrey") {
              tile.color = "white"
            }
          } else {
            if (tile.color === "grey") {
              tile.color = "black"
            } else if (tile.color === "white") {
              tile.color = "lightgrey"
            }
          }
        })

        if (this.mode === "white") {
          this.ctx.fillStyle = "black"
          this.ctx.fillRect(0, 0, 1000, 600)
          this.mode = "black"
          this.game.mode = "black"
        } else {
          this.mode = "white"
          this.game.mode = "white"
        }
      }
    }
    ```

    </p>
    </details>  

# Credit

Game based off a JS game created by [starzonmyarmz](https://github.com/starzonmyarmz/js13k-2018)
```
Music: "Wonderful Life" By HeatleyBros
Song link: https://www.youtube.com/watch?v=yif-nXPKuis
Free Music For Your Youtube Video
https://www.youtube.com/user/HeatleyBros
```
