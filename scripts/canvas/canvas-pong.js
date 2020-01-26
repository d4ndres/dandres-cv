const getDistanceComponent = (a, b) => Math.sqrt(Math.pow(a - b, 2));

function randomDirection() {
  if (Math.random() - 0.5 < 0) {
    return -1;
  } else {
    return 1;
  }
}

var canvasP = document.getElementById("canvas-pong");
canvasP.width = innerWidth;
canvasP.height = canvasP.width/2;
canvasP.style.background = "#000";

var cP = canvasP.getContext("2d");

class Court {
  draw() {
    this.bigRect();
    this.bigArcRight();
    this.bigArcLeft();
    this.middleLine();
    this.smallArc();
  }
  middleLine() {
    cP.beginPath();
    cP.moveTo(canvasP.width / 2, 0);
    cP.lineTo(canvasP.width / 2, canvasP.height);
    cP.strokeStyle = "#fff";
    cP.stroke();
    cP.closePath();
  }
  update() {
    this.draw();
  }
  bigRect() {
    cP.beginPath();
    cP.moveTo(0, 0);
    cP.lineTo(canvasP.width, 0);
    cP.moveTo(canvasP.width, canvasP.height);
    cP.lineTo(0, canvasP.height);
    cP.lineWidth = 2;
    cP.strokeStyle = "#fff";
    cP.stroke();
    cP.closePath();
  }
  smallArc() {
    cP.beginPath();
    cP.arc(
      canvasP.width / 2,
      canvasP.height / 2,
      canvasP.height * 0.05,
      0,
      Math.PI * 2,
      true
    );
    cP.fillStyle = "#000";
    cP.fill();
    cP.strokeStyle = "#fff";
    cP.stroke();
    cP.closePath();
  }
  bigArcLeft() {
    cP.beginPath();
    cP.arc(
      canvasP.width / 2,
      canvasP.height / 2,
      canvasP.height * 0.2,
      Math.PI * 3 / 2,
      Math.PI / 2,
      true
    );
    cP.fillStyle = "#000";
    cP.fill();
    cP.strokeStyle = "#fff";
    cP.stroke();
    cP.closePath();
  }
  bigArcRight() {
    cP.beginPath();
    cP.arc(
      canvasP.width / 2,
      canvasP.height / 2,
      canvasP.height * 0.2,
      Math.PI / 2,
      Math.PI * 3 / 2,
      true
    );
    cP.fillStyle = "#000";
    cP.fill();
    cP.strokeStyle = "#fff";
    cP.stroke();
    cP.closePath();
  }
}

class Player {
  constructor(x, y, keyCodeUp, keyCodeDown) {
    this.x = x;
    this.y = y;
    this.halfWidth = 10;
    this.halfHeight = 100;

    this.keyCodeUp = keyCodeUp || undefined;
    this.keyCodeDown = keyCodeDown || undefined;
    this.keyBoolUp = false;
    this.keyBoolDown = false;
    this.keyOn = undefined;

    this.isMoving = false;

    this.dy = 2;
  }
  init() {
    this.draw();
    this.watchKeys();
  }
  watchKeys() {
    window.addEventListener("keydown", ev => {
      let keyCode = ev.keyCode;

      if (keyCode == this.keyCodeUp) this.keyBoolUp = true;
      if (keyCode == this.keyCodeDown) this.keyBoolDown = true;
    });
    window.addEventListener("keyup", ev => {
      let keyCode = ev.keyCode;
      if (keyCode == this.keyCodeUp) this.keyBoolUp = false;
      if (keyCode == this.keyCodeDown) this.keyBoolDown = false;
    });
  }
  draw() {
    cP.beginPath();
    cP.fillStyle = "#fff";
    cP.fillRect(
      this.x - this.halfWidth / 2,
      this.y - this.halfHeight / 2,
      this.halfWidth,
      this.halfHeight
    );
    cP.closePath();
  }
  moving(thePlayers = []) {
    for (let i = 0; i < thePlayers.length; i++) {
      if (thePlayers === this) continue;

      if (this.keyBoolUp) {
        if (!(this.y - this.halfHeight / 2 < 0)) this.y += -this.dy;

        if (thePlayers[i].keyBoolUp)
          if (!(thePlayers[i].y - thePlayers[i].halfHeight / 2 < 0))
            thePlayers[i].y += -thePlayers[i].dy;

        if (thePlayers[i].keyBoolDown)
          if (!(thePlayers[i].y + thePlayers[i].halfHeight / 2 > canvasP.height))
            thePlayers[i].y += thePlayers[i].dy;
      }

      if (this.keyBoolDown) {
        if (!(this.y + this.halfHeight / 2 > canvasP.height)) this.y += this.dy;

        if (thePlayers[i].keyBoolUp)
          if (!(thePlayers[i].y - thePlayers[i].halfHeight / 2 < 0))
            thePlayers[i].y += -thePlayers[i].dy;

        if (thePlayers[i].keyBoolDown)
          if (!(thePlayers[i].y + thePlayers[i].halfHeight / 2 > canvasP.height))
            thePlayers[i].y += thePlayers[i].dy;
      }
    }
  }
  update(thePlayers = []) {
    this.moving(thePlayers);

    this.draw();
  }
}

class Ball {
  constructor(x, y, radius, color) {
    this.x = x || canvasP.width / 2;
    this.y = y || canvasP.height / 2;
    this.radius = radius || 6;
    this.color = color || "#fff";
    this.dy = (Math.random() - 0.5) * 8;
    this.dx = randomDirection() * 8;
  }
  draw() {
    cP.beginPath();
    cP.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    cP.fillStyle = this.color;
    cP.fill();
    cP.closePath();
  }
  update(wall = []) {
    for (let i = 0; i < wall.length; i++) {
      let x = getDistanceComponent(this.x, wall[i].x);
      let y = getDistanceComponent(this.y, wall[i].y);

      if (x - this.radius - wall[i].halfWidth / 2 <= 0)
        if (y - this.radius - wall[i].halfHeight / 2 <= 0) this.dx = -this.dx;

      // lados con circulos
    }

    if (this.y + this.radius > canvasP.height || this.y - this.radius < 0)
      this.dy = -this.dy;
    if (this.x + this.radius > canvasP.width || this.x - this.radius < 0)
      this.dx = -this.dx;

    this.y += this.dy;
    this.x += this.dx;
    this.draw();
  }
}
class Counter {
  constructor(x, y) {
    this.x = x || canvasP.width / 2;
    this.y = y || 0;
    this.pointsLeft = 0;
    this.pointsRight = 0;
  }
  draw() {
    this.size();
    this.counterLeft();
    this.counterRight();
  }
  update() {
    this.draw();
  }
  size() {
    cP.beginPath();
    cP.fillStyle = "rgba( 255, 255, 255, .5)";
    cP.fillRect(this.x - 100, this.y, 200, 60);
    cP.strokeStyle = "#fff";
    cP.strokeRect(this.x - 100, this.y, 200, 60);
    cP.closePath();
  }
  counterLeft() {
    cP.font = "40px Arial";
    cP.fillStyle = "#000";
    cP.fillText(`${this.pointsLeft}`, this.x - 70, this.y + 45);
  }
  counterRight() {
    cP.font = "40px Arial";
    cP.fillStyle = "#000";
    cP.fillText(`${this.pointsRight}`, this.x + 30, this.y + 45);
  }
}

class Game {
  constructor() {
    this.initOne = true;
  }
  start() {
    canvasP.style.cursor = "pointer";
    canvasP.addEventListener("click", () => {
      if (this.initOne) {
        animateP();
        canvasP.style.cursor = "default";
        this.initOne = false;
      }
    });
  }
  newGame(b = []) {
    balls.splice(0, 1);
    setTimeout(() => {
      balls.push(new Ball());
    }, 1000);
  }
  running() {}
  addPoint(b, d) {
    if (b.x + b.radius > canvasP.width) {
      d.pointsLeft += 1;
      this.newGame();
    }
    if (b.x - b.radius <= 0) {
      d.pointsRight += 1;
      this.newGame();
    }
  }
}

var game = new Game();
game.start();

var counter = new Counter();
var court = new Court();

var balls = [new Ball()];

var players = [
  new Player(100, canvasP.height / 2, 87, 83),
  new Player(canvasP.width - 100, canvasP.height / 2, 38, 40)
];
players.forEach(p => p.init());
court.update();
counter.draw();

balls.forEach(b => b.draw());

function animateP() {
  requestAnimationFrame(animateP);
  if ( window.pageYOffset < (canvasP.offsetHeight + canvasP.offsetTop )){
    for (let i = 0; i < balls.length; i++) {
      game.addPoint(balls[i], counter);
    }
    cP.clearRect(0, 0, canvasP.width, canvasP.height);
    court.update();
    counter.update();
    players.forEach(p => p.update(players));
    balls.forEach(b => b.update(players));
    
  }
  
}
