window.addEventListener('keydown', function (e){
  switch(e.keyCode) {
    case 37: return console.log("left");
    case 38: return console.log("up");
    case 39: return console.log("right");
    case 40: return console.log("down");
    case 32: return animateBoard();
  }
});

let snake = [26, 25, 24];

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


move(snake, "left")
move(snake, "up")
move(snake, "right")

let i = 1
let stop = false


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
  let num = Math.floor((Math.random() * 99) + 1);
  board[num] = ((num + 1) % 10 == 0) ? "|_@_|<br>" : "|_@_|"

  document.getElementById('board').innerHTML = board.join('');
}

function animateBoard(){
  setTimeout(function(){
    drawBoard();
    i += 1;
    if (i == 10) { stop = true }
    if (!stop) { animateBoard() }
  }, 500)
}



