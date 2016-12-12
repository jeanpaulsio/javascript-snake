$(document).ready(function(){
  
  // Number of Boxes on Board
  var boxCount = 1200;

  // Random Box Number
  var randNum = (Math.random() * 1200) + 1;

  // Snake Body
  var snakeBody = [612, 613, 614, 615, 616, 617];
  if(snakeBody.indexOf(parseInt(randNum)) != -1) {
    randNum += 10
  }

  // Edges
  var topEdgeMin = 1;
  var topEdgeMax = 30;
  var topEdgeArr = [];
  while(topEdgeMin <= topEdgeMax){ topEdgeArr.push(topEdgeMin++); }

  var botEdgeMin = 1171;
  var botEdgeMax = 1200;
  var botEdgeArr = [];
  while(botEdgeMin <= botEdgeMax){ botEdgeArr.push(botEdgeMin++); }

  var leftEdgeMin = 1;
  var leftEdgeMax = 1200;
  var leftEdgeArr = [];
  while(leftEdgeMin <= leftEdgeMax){ leftEdgeArr.push(leftEdgeMin+=30); }

  var rightEdgeArr = leftEdgeArr.map(function(i){return i - 1});
  
  // Create Game Board
  for(var i = 1; i <= boxCount; i++) {
    if(topEdgeArr.indexOf(i) !== -1) {
      $(".container").append('<div class="box edge"></div>');
    } else if(botEdgeArr.indexOf(i) !== -1) {
      $(".container").append('<div class="box edge"></div>');
    } else if(leftEdgeArr.indexOf(i) !== -1) {
      $(".container").append('<div class="box edge"></div>');
    } else if(rightEdgeArr.indexOf(i) !== -1) {
      $(".container").append('<div class="box edge"></div>');
    } else if(i == parseInt(randNum)){
      $(".container").append('<div class="box apple"></div>');
    } else if(snakeBody.indexOf(i) !== -1) {
      $(".container").append('<div class="box snake-body"></div>');
    } else {
      $(".container").append('<div class="box"></div>');
    }
  }
});

$(document).keydown(function(e){
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
