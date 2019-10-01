import Game from './game';
import Player from './player';
import Controller from './controller';

window.addEventListener("DOMContentLoaded", () => {
  console.log('working')
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d')

  // test // 
  let player = new Player({ pos: [250,250] })
  // let player1 = new Player({ pos: [150, 250] }) 
  // player.move("left")
  // player.jump()
  player.draw(ctx);
  let game = new Game()
  // game.animate(ctx)
  let controller = new Controller(player, ctx)
  controller.keyboardHandlers(ctx)
  console.log(player.pos)
  let loop
  window.requestAnimationFrame(loop);
  // test //
});
