let boardLength      = 22;
let area             = boardLength * boardLength;

let snake            = [180, 181, 182];
let fruitCoord       = 190;

let snakeDirection   = "right";

let gameSpeed        = 110;
let endGameStatus    = false;

let fruitAscii       = "|_$_|";
let snakeAscii       = "|_@_|";
let wallAscii        = "|_O_|";
let blankAscii       = "|___|";

let fruitHTML        = "<span class='box red'>&nbsp;</span>";
let snakeHTML        = "<span class='box yellow'>&nbsp;</span>";
let wallHTML         = "<span class='box blue'>&nbsp;</span>";
let blankHTML        = "<span class='box'>&nbsp;</span>";

function getTarget(snake, direction) {
  let snakeHead = snake[snake.length - 1]

  switch(direction) {
    case "right": return snakeHead + 1;
    case "left":  return snakeHead - 1;
    case "up":    return snakeHead - boardLength;
    case "down":  return snakeHead + boardLength;
  }
}

function setSnakeDirection(direction) {
  snakeDirection = direction
}

function moveSnake(snake, direction=snakeDirection  ) {
  window.addEventListener('keydown', function (e){
    if ((e.keyCode == 37) && !(direction == "right")) {
      return setSnakeDirection("left");
    } else if ((e.keyCode == 38) && !(direction == "down")) {
      return setSnakeDirection("up");
    } else if ((e.keyCode == 39) && !(direction == "left")) {
      return setSnakeDirection("right");
    } else if ((e.keyCode == 40) && !(direction == "up")) {
      return setSnakeDirection("down");
    } else {
      return setSnakeDirection(direction);
    }
  });

  let target = getTarget(snake, direction);

  for (let i = 0; i < snake.length; i++) {
    snake[i] = snake[i+1];
  }

  snake[snake.length - 1] = target;
}

function appendSnakeTail(snake) {
  switch(snake[0] - snake[1]) {
    case -1:
      snake.unshift(snake[0] - 1);
      break;
    case 1:
      snake.unshift(snake[0] + 1);
      break;
    case -boardLength :
      snake.unshift(snake[0] -boardLength);
      break;
    case boardLength :
      snake.unshift(snake[0] + boardLength);
      break;
  }
  getFruitCoord();
}

function feedSnake() {
  if (snake[0] == fruitCoord) {
    appendSnakeTail(snake);
  }
}

function snakeEatsSelf() {
  let snakeBody = snake.slice(0, snake.length-1);
  let snakeHead = snake[snake.length-1];
  if (snakeBody.includes(snakeHead)) {
    toggleGameStatus();
  }
}

function snakeHitsWall(board) {
  let wallCoords = getWallCoords(board);
  if (wallCoords.includes(snake[snake.length - 1]) ||
      wallCoords.includes(snake[snake.length - 1] + 1)) {
    toggleGameStatus();
  }
}

function getWallCoords(board) {
  let coords = [];
  for (let i = 0; i <= board.length; i++) {
    if (board[i] == wallHTML) {
      coords.push(i);
    }
  }
  return coords;
}

function getFruitCoord() {
  let randNumber = Math.floor((Math.random() * 130) + 1);
  fruitCoord = randNumber
}

function placeFruit(board) {
  let wallCoords = getWallCoords(board);
  while(board[fruitCoord].includes(wallAscii)) {
    getFruitCoord();
  }
}

function drawSnakeInHTML(board){
  for(let i = 0; i < board.length; i++) {
    if (snake.includes(i)) {
      board[i] = ((i + 1) % boardLength == 0) ? snakeHTML + "<br>" : snakeHTML ;
    }
  }
}

function renderBoardInHTML(board) {
  for (let i = 0; i < board.length; i++) {
    if ((i + 1) % boardLength == 0) {
      board[i] = wallHTML + "<br>"
    } else if  (board[i].includes(wallAscii)) {
      board[i] = wallHTML
    } else {
      board[i] = blankHTML
    }
    board[fruitCoord] = fruitHTML
  }
}

function toggleGameStatus() {
  endGameStatus = endGameStatus ? false : true;
}

function playGame() {
  let board = [
  "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|"
  ]

  placeFruit(board);
  renderBoardInHTML(board);
  snakeHitsWall(board);
  feedSnake();
  snakeEatsSelf();
  drawSnakeInHTML(board);
  moveSnake(snake)
  document.getElementById('board').innerHTML = board.join('');
}

function animateBoard(){
  setTimeout( () => {
    playGame();
    if (!endGameStatus) { animateBoard(); }
  }, gameSpeed)
}

function startGame(){
  endGameStatus = false;
  animateBoard();
}
