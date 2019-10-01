import Game from './game';
import Player from './player';
import Controller from './controller';

window.addEventListener("DOMContentLoaded", () => {
  console.log('working')
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d')

  // test // 
  let player = new Player({ pos: [250,250] })
  // player.move("left")
  // player.jump()
  let controller = new Controller(player, ctx)
  controller.keyboardHandlers()
  player.draw(ctx);
  console.log(player.pos)

  // test //
});