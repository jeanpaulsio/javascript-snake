$(document).ready(function(){
  let gameBoard = [];

  for(var i=15; i >= -15; i--){
      let rowMin = -15;
      let rowMax = 15;
      let row    = [];
      while(rowMin <= rowMax){ row.push([i, rowMin++]); };
    
    gameBoard.push(row);
  };

  for (let i of gameBoard) {
    for(let j of i){
      $(".container").append('<div class="box" name="['+ j +']"></div>');
    }
  };

  $("div[name*='[0,-2]']").addClass("snake-body");
  $("div[name*='[0,-1]']").addClass("snake-body");
  $("div[name*='[0,0]']").addClass("snake-body");
  $("div[name*='[0,1]']").addClass("snake-body");
  $("div[name*='[0,2]']").addClass("snake-body");
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
