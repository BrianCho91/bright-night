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

});
