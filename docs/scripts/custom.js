let board = [
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", "",
"", "", "", "", "", "", "", "", "", ""
]

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

function drawBoard(board) {
  for (let i = 0; i < board.length; i++) {
    board[i] = ((i + 1) % 10 == 0) ? " -\n" : ` ${board[i]}`
  }
  console.log(board.join(''));
}

let i = 1
let stop = false

function sayHi(){
  setTimeout(function() {
    document.getElementById('stuff').innerHTML = i;
    i += 1;
    if (i == 11) { stop = true }
    if (!stop) { sayHi() }
  }, 200);
}


