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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");








function makeImg(src) {
  var pic = new Image();
  pic.src = src;
  return pic;
}
/////////////////////////////////////////////////
// create images

var image = makeImg(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var backImage = makeImg(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var hillImage = makeImg(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
var tallImg = makeImg(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
canvas.width = 1024;
canvas.height = 576;
var mouse = {
  x: undefined,
  y: undefined
};
///////////////////////////////////////////////////
// Classes

var gravity = 1;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.x = 100;
    this.y = 300;
    this.width = 66;
    this.height = 150;
    this.color = "red";
    this.dx = 0;
    this.dy = 0;
    this.velocity = {
      x: 7,
      y: 17
    };
    this.image = makeImg(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprite = {
      stand: {
        right: makeImg(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        left: makeImg(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropW: 177,
        width: 66
      },
      run: {
        right: makeImg(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        left: makeImg(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropW: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprite.stand.right;
    this.currentW = 177;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.currentW * this.frames,
      // where to start cropping from original x = 0
      0,
      // where to start cropping from original y = 0
      this.currentW,
      // crop width
      400,
      // crop height 
      this.x, this.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && (this.currentSprite == this.sprite.stand.right || this.currentSprite == this.sprite.stand.left)) {
        this.frames = 0;
      }
      if (this.frames > 29 && (this.currentSprite == this.sprite.run.right || this.currentSprite == this.sprite.run.left)) {
        this.frames = 0;
      }
      this.draw();
      this.x += this.dx;
      this.y += this.dy;
      if (this.y + this.height + this.dy < canvas.height) {
        this.dy += gravity;
      }
    }
  }]);
  return Player;
}();
var Wall = /*#__PURE__*/function () {
  function Wall(x, y, image) {
    _classCallCheck(this, Wall);
    this.x = x;
    this.y = y;
    this.height = image.height;
    this.width = image.width;
    this.image = image;
  }
  _createClass(Wall, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }]);
  return Wall;
}();
var Ground = /*#__PURE__*/function () {
  function Ground(x, y) {
    _classCallCheck(this, Ground);
    this.x = x;
    this.y = y;
    this.height = backImage.height;
    this.width = backImage.width;
    this.image = backImage;
  }
  _createClass(Ground, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }]);
  return Ground;
}();
var Hill = /*#__PURE__*/function () {
  function Hill(x, y) {
    _classCallCheck(this, Hill);
    this.x = x;
    this.y = y;
    this.height = hillImage.height;
    this.width = hillImage.width;
    this.image = hillImage;
  }
  _createClass(Hill, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }]);
  return Hill;
}(); // end of classes
//////////////////////////////////////////////////////////////
// create arays of objects formed from classes
var player = new Player();
// console.log(player);
var walls = [];
function makeWalls() {
  walls.push(new Wall(image.width * 8 + 120, 260, tallImg), new Wall(image.width * 7 + 420, 320, tallImg), new Wall(-1, 470, image), new Wall(image.width - 3, 470, image), new Wall(image.width * 2 + 150, 470, image), new Wall(image.width * 3 + 270, 470, image), new Wall(image.width * 4 + 370, 470, image), new Wall(image.width * 5 + 600, 420, image), new Wall(image.width * 6 + 850, 470, image), new Wall(image.width * 8 - 350, 470, image), new Wall(image.width * 9 - 350, 470, image));
  // console.log(walls[0])
}

var backgrounds = [];
function makeGrounds() {
  backgrounds.push(new Ground(-1, -1));
  // console.log(backgrounds[0])
}

var hills = [];
function makeHIlls() {
  hills.push(new Hill(-1, -1));
  // console.log(hills[0])
}

///////////////////////////////////////////////////////////
// arrow smooth key effectts

var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  down: {
    pressed: false
  },
  up: {
    pressed: false
  }
};
// keep track current position
var distanceMoved = 0;

// init function fro restarting the game
function init() {
  player = new Player();
  // console.log(player);
  walls = [];
  makeWalls();
  backgrounds = [];
  makeGrounds();
  hills = [];
  makeHIlls();

  //keep track of current position
  distanceMoved = 0;
}
var previousKey;
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  backgrounds.forEach(function (wall) {
    wall.draw();
  });
  hills.forEach(function (wall) {
    wall.draw();
  });
  walls.forEach(function (wall) {
    wall.draw();
  });
  player.update();

  //handle keyboards
  if (keys.right.pressed && player.x < canvas.width / 2) {
    player.dx = player.velocity.x;
  } else if (keys.left.pressed && distanceMoved == 0 && player.x > 0) {
    player.dx = -player.velocity.x;
  } else {
    player.dx = 0;
    if (keys.right.pressed) {
      walls.forEach(function (wall) {
        wall.x -= player.velocity.x;
      });
      hills.forEach(function (wall) {
        wall.x -= player.velocity.x * 0.4;
      });
      distanceMoved += player.velocity.x;
    } else if (keys.left.pressed && distanceMoved > 0) {
      walls.forEach(function (wall) {
        wall.x += player.velocity.x;
      });
      hills.forEach(function (wall) {
        wall.x += player.velocity.x * 0.4;
      });
      distanceMoved -= player.velocity.x;
    }
  }

  //handle walls
  walls.forEach(function (wall) {
    if (player.y + player.height <= wall.y && player.y + player.height + player.dy >= wall.y && player.x + player.width >= wall.x && player.x < wall.x + wall.width) {
      player.dy = 0;
    }
  });
  if (keys.right.pressed && previousKey == "right" && player.currentSprite != player.sprite.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprite.run.right;
    player.currentW = player.sprite.run.cropW;
    player.width = player.sprite.run.width;
  } else if (keys.left.pressed && previousKey == "left" && player.currentSprite != player.sprite.run.left) {
    player.currentSprite = player.sprite.run.left;
    player.currentW = player.sprite.run.cropW;
    player.width = player.sprite.run.width;
  } else if (!keys.left.pressed && previousKey == "left" && player.currentSprite != player.sprite.run.left) {
    player.currentSprite = player.sprite.stand.left;
    player.currentW = player.sprite.stand.cropW;
    player.width = player.sprite.stand.width;
  } else if (!keys.right.pressed && previousKey == "right" && player.currentSprite != player.sprite.run.right) {
    player.currentSprite = player.sprite.stand.right;
    player.currentW = player.sprite.stand.cropW;
    player.width = player.sprite.stand.width;
  }
  // win condition
  if (distanceMoved === image.width * 9 - 350) {
    console.log("You won!");
  }
  // loose condition
  if (player.y > canvas.height) {
    console.log("You loose");
    init();
  }
}
init();
animate();
/////////////////////////////////////////////
// Event listeners

addEventListener("keydown", function (_ref) {
  var key = _ref.key;
  switch (key) {
    case "ArrowRight":
      previousKey = "right";
      keys.right.pressed = true;
      break;
    case "ArrowLeft":
      previousKey = "left";
      keys.left.pressed = true;
      break;
    case "ArrowUp":
      keys.up.pressed = true;
      player.dy = -player.velocity.y;
      break;
    case "ArrowDown":
      break;
  }
});
addEventListener("keyup", function (_ref2) {
  var key = _ref2.key;
  switch (key) {
    case "ArrowRight":
      player.currentSprite = player.sprite.stand.right;
      player.currentW = player.sprite.stand.cropW;
      player.width = player.sprite.stand.width;
      keys.right.pressed = false;
      break;
    case "ArrowLeft":
      player.currentSprite = player.sprite.stand.left;
      player.currentW = player.sprite.stand.cropW;
      player.width = player.sprite.stand.width;
      keys.left.pressed = false;
      break;
    case "ArrowUp":
      keys.up.pressed = false;
      break;
    case "ArrowDown":
      player.dy = 0;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map