import Game from './game';
import Controller from './controller';
import { request } from 'http';

class GameView {
  constructor(ctx) {
    this.game = new Game(ctx)

  }

}

export default GameView;