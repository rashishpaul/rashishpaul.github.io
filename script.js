$(document).ready(function(){

  // setup var values
  var colors= ["green", "red", "blue", "yellow"];
  var green = [0];
  var red = [1];
  var blue = [2];
  var yellow = [3];
  var computer = [];


  var randomColors = function light(){
      for(i = 0; i < computer.length; i++);
      computer.push(Math.floor(Math.random() * colors.length)+1);
      console.log(computer);


  var auto = function gameStart(){
  if (computer[0] === "green") {
     $(".green").toggleClass('change');
  } else if (computer[1] === "red") {
     $(".red").toggleClass('change');
  } else if (computer[2] === "blue") {
    $(".blue").toggleClass('change');
  } else if (computer[3] === "yellow") {
    $(".yellow").toggleClass('change');
  }
  setTimeout(auto,3000);
  console.log(computer)


//setting up players move inputs with arrow keys
  var moves = [];
  var upkey = '38';
  var rightkey = '39';
  var downkey =  '40';
  var leftkey = '37';
  //used @keyframes animation to get the arrow keys to transition opacity
  var player = $(document).keydown(function(e) {
         if (moves.length < computer.length) {
              if (e.keyCode == leftkey) {
                  $(".yellow").toggleClass('change'); moves.push("yellow"); console.log(moves);
              } else if (e.keyCode == rightkey) {
                  $(".red").toggleClass('change'); moves.push("red"); console.log(moves);
              } else if (e.keyCode == upkey) {
                  $(".green").toggleClass('change'); moves.push("green"); console.log(moves);
              } else if (e.keyCode == downkey) {
                  $(".blue").toggleClass('change'); moves.push("blue"); console.log(moves);
                }
  function winner(){
         var result = [];
         if (moves.length === computer.length) {
         computer.forEach(function(value, index){
         if (value !== moves[index]){
           result.indexOf('nope')>-1;
           console.log('lose');
         } else {
         for (var i = 0; i < computer; i++){
            light();
        console.log('win');
       } //closes for loop function winner

      }//closes else cond. function winner
     })//closes for.Each method in function winner
  }//closes function winner if statement

}//closes funcion winner
}//closes var player .keydown
})//closes var player
}
}
})

