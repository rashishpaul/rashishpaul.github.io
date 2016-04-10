$(document).ready(function(){

  // setup var values
  var colors= ["green", "red", "blue", "yellow"];
  var red = [0];
  var blue = [1];
  var green = [2];
  var yellow = [3];
  var numberOfTurns = "1";


//this function generates random sequence(rndmlghts) and sets the length of the round
var computer = [];
// $(".start").click(function(){
  var randomlight = function randomlight(){
    // for (var i = 0; i < roundLength; i++) {
      computer.push(colors[Math.floor((Math.random() * colors.length))]);
    // }
    // return computer;
  };
  //this calls the function to run
  randomlight(numberOfTurns);
  console.log(computer)
//setting up players move inputs with arrow keys
  var moves = [];
  var upkey = '38';
  var rightkey = '39';
  var downkey =  '40';
  var leftkey = '37';
  //used animation to get the arrow keys to transition opacity
  var bright = $(document).keydown(function(e) {
         if (moves.length < computer.length) {
              if (e.keyCode == leftkey) {
                  $(".yellow").toggleClass('change'); moves.push("yellow"); console.log(moves);
              } else if (e.keyCode == rightkey) {
                  $(".red").toggleClass('change'); moves.push("red"); console.log(moves);
              } else if (e.keyCode == upkey) {
                  $(".green").toggleClass('change'); moves.push("green"); console.log(moves);
              } else if (e.keyCode == downkey) {
                  $(".blue").toggleClass('change'); moves.push("blue"); console.log(moves);
              } else {
              console.log(moves);
  function winner(){
         if (moves.length === computer.length) {
        var result = []
         computer.forEach(function(value, index){
        if (value !== moves[index]){
           result.indexOf('nope')>-1;
           alert('lose');
        } else {
        for (var i = 0; i < computer; i++){
            rndmlghts;
        console.log('win');
       }

      }
     })
 }


  }
}
}
})
})

