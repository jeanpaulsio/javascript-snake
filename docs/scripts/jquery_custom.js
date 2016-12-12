$(document).ready(function(){
	
	// Number of Boxes on Board
	var boxCount = 1200;

	// Random Box Number
	var randNum = (Math.random() * 1200) + 1;

	// Snake Body
	var snakeBody = [613, 614, 615, 616];
	if(snakeBody.indexOf(parseInt(randNum)) != -1) {
		randNum += 10
	}

	// Create Game Board
	for(var i = 1; i <= boxCount; i++) {
	  if(i == parseInt(randNum)){
	  	$(".container").append('<div class="box apple"></div>');
	  } else if(snakeBody.indexOf(i) !== -1) {
	  	$(".container").append('<div class="box snake-body"></div>');
	  } else {
	  	$(".container").append('<div class="box"></div>');
	  }
	}

});