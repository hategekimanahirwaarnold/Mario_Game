let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
import platform from "../img/platform.png";
import backgroundImg from "../img/background.png";
import hillsImg from "../img/hills.png";
import tallPlat from "../img/platformSmallTall.png"
import runLeft from "../img/spriteRunLeft.png"
import runRight from "../img/spriteRunRight.png"
import standLeft from "../img/spriteStandLeft.png"
import standRight from "../img/spriteStandRight.png"
function makeImg (src) {
  const pic = new Image();
  pic.src = src;
  return pic;
}
/////////////////////////////////////////////////
// create images

let image = makeImg(platform);
let backImage = makeImg(backgroundImg);
let hillImage = makeImg(hillsImg);
let tallImg = makeImg(tallPlat);

canvas.width = 1024;
canvas.height = 576;

var mouse = {
    x: undefined,
    y: undefined
}
///////////////////////////////////////////////////
// Classes

const gravity = 1;

class Player {
    constructor() {
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
        this.image  = makeImg(standRight);
        this.frames = 0;
        this.sprite = {
          stand: {
            right: makeImg(standRight),
            left: makeImg(standLeft),
            cropW: 177,
            width: 66
          },
          run: {
            right: makeImg(runRight),
            left: makeImg(runLeft),
            cropW: 341,
            width: 127.875
          }
        };
        this.currentSprite = this.sprite.stand.right;
        this.currentW = 177;
    }

    draw() {
        c.drawImage(this.currentSprite,
          this.currentW * this.frames, // where to start cropping from original x = 0
          0, // where to start cropping from original y = 0
          this.currentW, // crop width
          400, // crop height 
          this.x, this.y, 
          this.width, 
          this.height);
    }
    update() {
        this.frames++;
        if (this.frames > 59 && 
            (this.currentSprite == this.sprite.stand.right ||
            this.currentSprite == this.sprite.stand.left)
            ) {
            this.frames = 0;
        }
        if (
          this.frames > 29 && 
          (this.currentSprite == this.sprite.run.right ||
          this.currentSprite == this.sprite.run.left)
          ) {
          this.frames = 0;
        }
        this.draw();
        this.x += this.dx;
        this.y += this.dy;
        if (this.y + this.height + this.dy < canvas.height) {
            this.dy += gravity;
        }
    }
}

class Wall {
    constructor (x, y, image) {
        this.x = x;
        this.y = y;
        this.height = image.height;
        this.width = image.width;
        this.image = image;
    }

    draw () {
        c.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

class Ground {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.height =  backImage.height;
      this.width = backImage.width;
      this.image =  backImage;
  }

  draw () {
      c.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

}

class Hill {
  constructor (x, y) {
      this.x = x;
      this.y = y;
      this.height =  hillImage.height;
      this.width = hillImage.width;
      this.image =  hillImage;
  }

  draw () {
      c.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

}
// end of classes
//////////////////////////////////////////////////////////////
// create arays of objects formed from classes

let player = new Player();
// console.log(player);
let walls = [];
function makeWalls() {
    walls.push(
    new Wall(image.width * 8 + 120, 260, tallImg),
    new Wall(image.width * 7 + 420, 320, tallImg),
    new Wall(-1, 470, image),
    new Wall(image.width - 3, 470, image),
    new Wall(image.width * 2 + 150, 470, image),
    new Wall(image.width * 3 + 270, 470, image),
    new Wall(image.width * 4 + 370, 470, image),
    new Wall(image.width * 5 + 600, 420, image),
    new Wall(image.width * 6 + 850, 470, image),
    new Wall(image.width * 8 - 350, 470, image),
    new Wall(image.width * 9 - 350, 470, image)
    );
    // console.log(walls[0])
}

let backgrounds = [];
function makeGrounds() {
    backgrounds.push(new Ground(-1, -1));
    // console.log(backgrounds[0])
}

let hills = [];
function makeHIlls() {
    hills.push(new Hill(-1, -1));
    // console.log(hills[0])
}
  
///////////////////////////////////////////////////////////
// arrow smooth key effectts

let keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    },
    down: {
        pressed: false,
    },
    up: {
        pressed: false
    }
}
// keep track current position
let distanceMoved = 0;

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
let previousKey;

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);

    backgrounds.forEach((wall) => {
        wall.draw();
    });

    hills.forEach((wall) => {
      wall.draw();
    });

    walls.forEach((wall) => {
        wall.draw();
    })

    player.update();

    //handle keyboards
    if (keys.right.pressed && player.x < canvas.width / 2) {
        player.dx = player.velocity.x;
    } else if (keys.left.pressed && distanceMoved == 0 && player.x > 0) {
        player.dx = - player.velocity.x;
    } else {
        player.dx = 0;
        if (keys.right.pressed) {
            walls.forEach((wall) => {
                wall.x -= player.velocity.x;
            });
            hills.forEach((wall) => {
              wall.x -= player.velocity.x * 0.4;
            });
            distanceMoved += player.velocity.x;
        } else if (keys.left.pressed && distanceMoved > 0) {
            walls.forEach((wall) => {
                wall.x += player.velocity.x;
            });
            hills.forEach((wall) => {
              wall.x += player.velocity.x * 0.4;
            });
            distanceMoved -= player.velocity.x;
        }
    }

    //handle walls
    walls.forEach((wall) => {
        if (player.y + player.height <= wall.y && 
            player.y + player.height + player.dy >= wall.y && 
            player.x + player.width >= wall.x &&
            player.x < wall.x + wall.width) {
            player.dy = 0;
        }
    });

    if (
        keys.right.pressed &&
        previousKey == "right" &&
        player.currentSprite != player.sprite.run.right) {
        player.frames = 1;
        player.currentSprite = player.sprite.run.right;
        player.currentW = player.sprite.run.cropW;
        player.width = player.sprite.run.width;
    } else if (
        keys.left.pressed &&
        previousKey == "left" &&
        player.currentSprite != player.sprite.run.left) {
        player.currentSprite = player.sprite.run.left;
        player.currentW = player.sprite.run.cropW;
        player.width = player.sprite.run.width;
    } else if (
        !keys.left.pressed &&
        previousKey == "left" &&
        player.currentSprite != player.sprite.run.left) {
        player.currentSprite = player.sprite.stand.left;
        player.currentW = player.sprite.stand.cropW;
        player.width = player.sprite.stand.width;
    } else if (
        !keys.right.pressed &&
        previousKey == "right" &&
        player.currentSprite != player.sprite.run.right) {
        player.currentSprite = player.sprite.stand.right;
        player.currentW = player.sprite.stand.cropW;
        player.width = player.sprite.stand.width;
}
    // win condition
    if (distanceMoved === image.width * 9 - 350) {
        console.log("You won!");
    }
    // loose condition
    if (player.y > canvas.height)
    {
      console.log("You loose");
      init();
    }
}
init();
animate();
/////////////////////////////////////////////
// Event listeners

addEventListener("keydown", ({ key }) => {
    switch (key) {
        case "ArrowRight":
            previousKey = "right";
            keys.right.pressed = true
            break;
        case "ArrowLeft":
            previousKey = "left";
            keys.left.pressed = true;
            break;
        case "ArrowUp":
            keys.up.pressed = true;
            player.dy = - player.velocity.y;
            break;
        case "ArrowDown":
            break;
    }
})

addEventListener("keyup", ({ key }) => {
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
})

