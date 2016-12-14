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

function populateSnake(snakeCoords){
  var length = snakeCoords.length;
  for(var i = 0; i < snakeCoords.length; i++){
    $("[name='" + snakeCoords[i] + "'").addClass("snake-body");
  }
}

// Snake Constructor
var Snake = function(bodyCoords){
  this.bodyCoords = bodyCoords;
  this.direction = "r"
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




// TODO: ORGANIZE THIS MESS
/*
GameBoard.prototype.showSnake = function(){
    var length = this.snakeLocation.length;
    for(var i = 0; i < this.snakeLocation.length; i++){
      $("[name='" + this.snakeLocation[i] + "'").addClass("snake-body");
    }
  };
  GameBoard.prototype.hideSnake = function(){
    $(".box").removeClass("snake-body");
  };

  BOARD.showSnake();
  
    // Listen for Keyboard Input
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
      window.setTimeout(BOARD.hideSnake, 2000);
      

    } else if(e.keyCode == 40){
      $(".fa").removeClass("active");
      $(".fa-arrow-down").toggleClass("active");
    }
  });



*/

$(document).ready(function(){
  var gridCoords  = createGrid();
  var gameBoard   = populateGrid(gridCoords);
  var yellowSnake = new Snake([[-1,0],[0,0],[1,0]]);

  populateSnake(yellowSnake.bodyCoords);
  yellowSnake.move("u");
  populateSnake(yellowSnake.bodyCoords);
});




