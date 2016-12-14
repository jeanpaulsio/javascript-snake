function createGrid(){
  allCoords = [];
  for(var i=15; i >= -15; i--){
    let rowMin = -15; let rowMax = 15; let row = [];
    while(rowMin <= rowMax){ row.push([rowMin++, i]); }
    
    allCoords.push(row);
  }
  return allCoords
}

function populateGrid(allCoords){
  for(let i of allCoords){
    for(let j of i){
      $(".container").append('<div class="box" name="'+ j +'"></div>');
    }
  }
}

var Snake = function(bodyCoords){
  this.bodyCoords = bodyCoords;
  this.direction  = "r"
}

function renderSnake(snakeCoords){
  var length = snakeCoords.length;
  for(var i = 0; i < snakeCoords.length; i++){
    $("[name='" + snakeCoords[i] + "'").addClass("snake-body");
  }
}
function eraseSnake(){
  $(".box").removeClass("snake-body");
}

Snake.prototype.move = function(direction){
  var headPiece = this.bodyCoords[this.bodyCoords.length - 1];
  
  switch(direction){
    case "u": 
      this.bodyCoords.push([headPiece[0], headPiece[1]+1]);
      break;
    case "r":
      this.bodyCoords.push([headPiece[0]+1, headPiece[1]]);
      break;
    case "d":
      this.bodyCoords.push([headPiece[0], headPiece[1]-1]);
      break;
    case "l":
      this.bodyCoords.push([headPiece[0]-1, headPiece[1]]);
      break;
    default:
      return this.bodyCoords;
  }
  
  this.bodyCoords.shift();
  return this.bodyCoords;
};

function gameLoop(currentSnake){

  setTimeout(function(){
    if(currentSnake.bodyCoords[currentSnake.bodyCoords.length-1][1] != 15){
      eraseSnake()
      currentSnake.move("u");
      gameLoop(currentSnake);
      renderSnake(currentSnake.bodyCoords);
    }
  }, 200);
}


$(document).ready(function(){
  
  
  var yellowSnake = new Snake([[-1,0],[0,0],[1,0]]);

  var gridCoords  = createGrid();
  populateGrid(gridCoords);
  gameLoop(yellowSnake)
});







// listen for arrows

$(window).keydown(function(e){
  if(e.keyCode == 37){
      $(".fa").removeClass("active");
      $(".fa-arrow-left").toggleClass("active");
  } else if(e.keyCode == 38){
      $(".fa").removeClass("active");
      $(".fa-arrow-up").toggleClass("active");
  } else if(e.keyCode == 39){
      $(".fa").removeClass("active");
      $(".fa-arrow-right").toggleClass("active");
  } else if(e.keyCode == 40){
      $(".fa").removeClass("active");
      $(".fa-arrow-down").toggleClass("active");
  }
});
