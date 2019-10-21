class Controller {
  constructor(player, map, game, ctx) {
    this.player = player;
    this.map = map;
    this.ctx = ctx
    this.game = game

    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {

        case 38 && 87: // up arrow
          if (this.player.jumping === false) {
            this.player.jump();
            this._timeout = setTimeout(() => {
              if (this.player.jumping === true)
                this.player.comeDown()
            }, 300)
          }
          break;

        case 37 && 65: // left arrow

          this.player.moveLeft();
          break;

        case 39 && 68: // right arrow

          this.player.moveRight();
          break;

        case 32: // space
          // debugger
          this.map.flipMap();
          this.map.flipTiles()
          break;

        case 77: // m
          const audio = document.getElementById('audio');
          if (this.game.volume === true) {
            this.game.volume = false;
            audio.pause();
          } else {
            this.game.volume = true
            audio.play();
          }
          break;

        default:
          break;
      }
    })

    document.addEventListener("keyup", (e) => {
      // debugger
      switch (e.keyCode) {
        case 38 && 87: // up arrow
          this.player.comeDown()
          break;

        case 37 && 65: // left arrow
          if (this.player.velX < 0)
            this.player.stop();
          break;

        case 39 && 68: // right arrow
          if (this.player.velX > 0)
            this.player.stop();
          break;

        default:
          break;
      }
    })
  }
}

export default Controller;