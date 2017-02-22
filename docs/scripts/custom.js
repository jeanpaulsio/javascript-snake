let snake = [0, 1, 2];

window.addEventListener('keydown', function (e){
  switch(e.keyCode) {
    case 37: return move(snake, "left");
    case 38: return move(snake, "up");
    case 39: return move(snake, "right");
    case 40: return move(snake, "down");
  }
});

function getTarget(snake, direction) {
  let snakeHead = snake[snake.length - 1]

  switch(direction) {
    case "right": return snakeHead + 1;
    case "left":  return snakeHead - 1;
    case "up":    return snakeHead - 10;
    case "down":  return snakeHead + 10;
  }
}

function move(snake, position) {
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
      board[i] = "|_X_|";
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
  // let num = Math.floor((Math.random() * 99) + 1);
  // board[num] = ((num + 1) % 10 == 0) ? "|_@_|<br>" : "|_@_|";
  drawSnake(board);

  document.getElementById('board').innerHTML = board.join('');
}

function animateBoard(){
  setTimeout(function(){
    drawBoard();
    if (!endGame()) { animateBoard() }
  }, 0)
}
