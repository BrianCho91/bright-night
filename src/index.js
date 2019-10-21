import Game from './game';

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d')

  let game = new Game(ctx);
  game.start()
});
