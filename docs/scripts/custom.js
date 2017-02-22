let snake = [0, 1, 2];
let currentPosition = "right";
let gameSpeed = 333;

function getTarget(snake, direction) {
  let snakeHead = snake[snake.length - 1]

  switch(direction) {
    case "right": return snakeHead + 1;
    case "left":  return snakeHead - 1;
    case "up":    return snakeHead - 10;
    case "down":  return snakeHead + 10;
  }
}

function setPosition(position) {
  currentPosition = position
}

function move(snake, position=currentPosition) {
  window.addEventListener('keydown', function (e){
    if (e.keyCode == 37) {
      setPosition("left")
    } else if (e.keyCode == 38) {
      setPosition("up")
    } else if (e.keyCode == 39) {
      setPosition("right")
    } else if(e.keyCode == 40){
      setPosition("down")
    }
  });

  console.log(position);

  let target = getTarget(snake, position)

  for (let i = 0; i < snake.length; i++) {
    snake[i] = snake[i+1]
  }

  snake[snake.length - 1] = target;
  console.log(snake);
}

function endGame(){
  false;
}

function drawSnake(board){
  for(let i = 0; i < board.length; i++) {
    if (snake.includes(i)) {
      board[i] = ((i + 1) % 10 == 0) ? "|_X_|<br>" : "|_X_|";
    }
  }
}

function drawBoard() {
  let board = [
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|",
  "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|", "|___|"
  ]

  for (let i = 0; i < board.length; i++) {
    board[i] = ((i + 1) % 10 == 0) ? "|___|<br>" : `${board[i]}`
  }

  drawSnake(board);
  move(snake)
  document.getElementById('board').innerHTML = board.join('');
}

function animateBoard(){
  setTimeout(()=> {
    drawBoard();
    if (!endGame()) { animateBoard() }
  }, gameSpeed)
}
