// TODO snake can't move backward
// TODO snake dies if it runs into itself
// TODO append snake body better

let snake            = [23, 24];
let currentDirection = "right";
let gameSpeed        = 250;
let endGameStatus    = false
let fruitCoord       = 29;

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
    switch(e.keyCode) {
      case 37: return setPosition("left");
      case 38: return setPosition("up");
      case 39: return setPosition("right");
      case 40: return setPosition("down");
    }
  });

  let target = getTarget(snake, position);

  for (let i = 0; i < snake.length; i++) {
    snake[i] = snake[i+1];
  }

  snake[snake.length - 1] = target;

  console.log(snake)
}

function feedSnake(snake) {
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
  placeFruit();
}

function placeFruit() {
  let randNumber = Math.floor((Math.random() * 130) + 1);
  fruitCoord = randNumber
}

function endGame(){
  return endGameStatus;
}

function toggleGameStatus(){
  endGameStatus = endGameStatus ? false : true;
}

function resumeGame(){
  endGameStatus = false;
  animateBoard();
}

function drawSnake(board){
  for(let i = 0; i < board.length; i++) {
    if (snake.includes(i)) {
      if (board[i].includes("O")) { toggleGameStatus() }
      board[i] = ((i + 1) % 11 == 0) ? "|_X_|<br>" : "|_X_|";
    }
  }
}

function drawBoard() {
  let board = [
  "O", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "O",
  "O", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "|_O_|", "O"
  ]
  while(board[fruitCoord].includes("O")) {
    placeFruit();
  }

  board[fruitCoord] = "|_@_|"

  for (let i = 0; i < board.length; i++) {
    board[i] = ((i + 1) % 11 == 0) ? `${board[i] += '<br>'}` : `${board[i]}`
  }

  if(snake[snake.length-2] == fruitCoord){
    feedSnake(snake)
  }

  drawSnake(board);
  moveSnake(snake)
  document.getElementById('board').innerHTML = board.join('');
}

function animateBoard(){
  setTimeout( () => {
    drawBoard();
    if (!endGame()) { animateBoard() }
  }, gameSpeed)
}
