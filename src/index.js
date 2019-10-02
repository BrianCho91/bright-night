
import Player from './player1';
import Game from './game';
import Controller from './controller';
import Map from './map';
import GameView from './game_view';

window.addEventListener("DOMContentLoaded", () => {
  console.log('working')
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d')

  // let game = new Game(ctx);
  let game = new Game(ctx);
  game.start()
  // gameView.start(ctx);

  // test // 
  // let player = new Player({ pos: [250,250] })
  // // let player1 = new Player({ pos: [150, 250] }) 
  // // player.move("left")
  // // player.jump()
  // player.draw(ctx);
  // let game = new Game()
  // // game.animate(ctx)
  // let controller = new Controller(player, ctx)
  // controller.keyboardHandlers(ctx)
  // console.log(player.pos)
  // // test //
  // let map = new Map(ctx)
  // console.log(map)
});
