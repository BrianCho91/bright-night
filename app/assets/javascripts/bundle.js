/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


class Controller {
  constructor(player, ctx) {
    this.player = player
    this.ctx = ctx
    this.keyboardHandlers = this.keyboardHandlers.bind(this);
  }

  keyboardHandlers() {
    window.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 38: // up arrow
          // console.log("w")
          this.player.jump();
          console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        case 40: // down arrow

          this.player.move("down");
          console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        case 37: // left arrow

          this.player.move("left")
          console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        case 39: // right arrow

          this.player.move("right");
          console.log(this.player.pos)
          this.player.draw(this.ctx)
          break;

        case  true && 39:
          console.log('upright')
          break;
        // case 13: // enter
        //   if (this.game.menu === true) {

        //   } else {

        //   }

        default:
          break;
      }
    })
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



class Game {
  constructor(options) {
    // this.player = new Player({ pos: [250, 250]})
    // this.refresh = this.refresh.bind(this);
    // this.drawPlayer = this.drawPlayer.bind(this)
    // this.animate = this.animate.bind(this)
    // this.controller = new Controller(this.player)
  };

  // refresh(ctx) {
  //   ctx.clearRect(0, 0, 1000, 600)
  // }

  // drawPlayer(ctx) {
  //   this.player.draw(ctx);
  // }

  // animate(ctx) {
  //   this.refresh(ctx);
  //   this.player.draw(ctx)
  //   requestAnimationFrame(this.animate());
  // }

}

const CONSTANTS = {
  GRAVITY: 0.4
}

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");




window.addEventListener("DOMContentLoaded", () => {
  console.log('working')
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d')

  // test // 
  let player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]({ pos: [250,250] })
  // let player1 = new Player({ pos: [150, 250] }) 
  // player.move("left")
  // player.jump()
  player.draw(ctx);
  let game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]()
  // game.animate(ctx)
  let controller = new _controller__WEBPACK_IMPORTED_MODULE_2__["default"](player, ctx)
  controller.keyboardHandlers(ctx)
  console.log(player.pos)
  let loop
  window.requestAnimationFrame(loop);
  // test //
});


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


class Player {
  constructor(options) {
    this.pos = options.pos,
    this.vel = 1,
    this.width = 50,
    this.height = 50
    this.color = options.color || "black"
  };

  draw(ctx) {
    ctx.clearRect(0, 0, 1000, 600)
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  };
  
  move(direction) {
    const newX = this.pos[0] + (Player.MOVES[direction][0] * this.vel);
    const newY = this.pos[1] + (Player.MOVES[direction][1] * this.vel);
    const newPos = [newX, newY];
    this.pos = newPos
  };

  jump() {
    const posX = this.pos[0];
    const newY = this.pos[1] - 40;

    const newPos = [posX, newY]
    this.pos = newPos
  }

};



Player.MOVES = {
  "up" : [0, -1],
  "down": [0, 1],
  "left": [-1, 0],
  "right": [1, 0],

  "up-left": [-1,-1],
  "up-right": [1, -1],
  "down-left": [-1, 1],
  "down-right": [1, 1]
};


/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map