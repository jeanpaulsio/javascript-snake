function foo(){
  setTimeout(function(){console.log("blah")}, 500);
}


let snake = [42, 43, 44, 45];

function getTarget(snake, direction) {
  if (direction == "right") {
    return snake[snake.length - 1] + 1
  } else if (direction == "up") {
    return snake[snake.length - 1] - 10;
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


move(snake, "right");
move(snake, "up");
move(snake, "up");
move(snake, "right");


