
let snake            = [23, 24, 25, 26];
let currentDirection = "right";
let gameSpeed        = 200;
let endGameStatus    = false
let fruitCoord       = 30;
let fruitDrawing     = "|_$_|";
let snakeDrawing     = "|_@_|"

function getTarget(snake, direction) {
  let snakeHead = snake[snake.length - 1]

  switch(direction) {
    case "right": return snakeHead + 1;
    case "left":  return snakeHead - 1;
    case "up":    return snakeHead - 11;
    case "down":  return snakeHead + 11;
  }
}

function setPosition(position) {
  currentDirection = position
}

function moveSnake(snake, position=currentDirection) {
  window.addEventListener('keydown', function (e){
    if ((e.keyCode == 37) && !(position == "right")) {
      return setPosition("left");
    } else if ((e.keyCode == 38) && !(position == "down")) {
      return setPosition("up");
    } else if ((e.keyCode == 39) && !(position == "left")) {
      return setPosition("right");
    } else if ((e.keyCode == 40) && !(position == "up")) {
      return setPosition("down");
    } else {
      return setPosition(position);
    }
  });

  let target = getTarget(snake, position);

  for (let i = 0; i < snake.length; i++) {
    snake[i] = snake[i+1];
  }

  snake[snake.length - 1] = target;

  console.log("snake + direction")
  console.log(snake)
  console.log(position)
}

function appendSnakeTail(snake) {
  switch(snake[0] - snake[1]) {
    case -1:
      snake.unshift(snake[0] - 1);
      break;
    case 1:
      snake.unshift(snake[0] + 1);
      break;
    case -11:
      snake.unshift(snake[0] -11);
      break;
    case 11:
      snake.unshift(snake[0] + 11);
      break;
  }
  getFruitCoord();
}

function feedSnake() {
  if (snake[0] == fruitCoord) {
    appendSnakeTail(snake);
  }
}

function eatsSelf() {
  let snakeBody = snake.slice(0, snake.length-1);
  let snakeHead = snake[snake.length-1];
  if (snakeBody.includes(snakeHead)) {
    toggleGameStatus();
  }
}

// TODO refactor this mess
function crashesIntoWall(board) {
  let wallCoords = getWallCoords(board);
  if (wallCoords.includes(snake[snake.length - 1]) ||
      wallCoords.includes(snake[snake.length - 1] + 1)) {
    toggleGameStatus();
  }
  console.log("wallCoords:")
  console.log(wallCoords)
}

function getFruitCoord() {
  let randNumber = Math.floor((Math.random() * 130) + 1);
  fruitCoord = randNumber
}

function placeFruit(board) {
  let wallCoords = getWallCoords(board);
  while(board[fruitCoord].includes("|_O_|")) {
    getFruitCoord();
  }
}

function endGame(){
  return endGameStatus;
}

function toggleGameStatus() {
  endGameStatus = endGameStatus ? false : true;
}

function drawSnake(board){
  for(let i = 0; i < board.length; i++) {
    if (snake.includes(i)) {
      board[i] = ((i + 1) % 11 == 0) ? snakeDrawing + "<br>" : snakeDrawing;
    }
  }
}

function getWallCoords(board) {
  let boardCoords = [];
  for (let i = 0; i <= board.length; i++) {
    if (board[i] == "|_O_|") {
      boardCoords.push(i);
    }
  }
  return boardCoords;
}

function renderBoard(board) {
  for (let i = 0; i < board.length; i++) {
    board[i] = ((i + 1) % 11 == 0) ? `${board[i] += '<br>'}` : `${board[i]}`;
    board[fruitCoord] = fruitDrawing;
  }
}

function playGame() {
  let board = [
  "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|_O_|",
  "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|"
  ]

  placeFruit(board);
  renderBoard(board)
  crashesIntoWall(board);
  feedSnake();
  eatsSelf();
  drawSnake(board);
  moveSnake(snake)
  document.getElementById('board').innerHTML = board.join('');
}

function animateBoard(){
  setTimeout( () => {
    playGame();
    if (!endGame()) { animateBoard() }
  }, gameSpeed)
}

function startGame(){
  endGameStatus = false;
  animateBoard();
}
