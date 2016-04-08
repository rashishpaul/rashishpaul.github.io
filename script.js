$(document).ready(function(){

  // setup var values
  var crescents = ["green", "red", "blue", "yellow"];
  var red = [0];
  var blue = [1];
  var green = [2];
  var yellow = [3];
  var numberOfTurns = 4;


//this function generates random sequence(rndmlghts) and sets the length of the round
var computer = [];

  var rndmlghts = function(roundLength){
    computer = [];
    for (var i = 0; i < roundLength; i++) {
      computer.push(crescents[Math.floor((Math.random() * crescents.length))]);
    }
    // return computer;
  };
  //this calls the function to run
  rndmlghts(numberOfTurns);
  console.log(computer);
//setting up players move inputs with arrow keys
  var moves = [];
  var upkey = '38';
  var rightkey = '39';
  var downkey =  '40';
  var leftkey = '37';
  var plyrmves = $(document).keydown(function(e) {
         if (moves.length < computer.length) {
              if (e.keyCode == leftkey) {
                  moves.push("yellow"); console.log(moves);
              } else if (e.keyCode == rightkey) {
                  moves.push("red"); console.log(moves);
              } else if (e.keyCode == upkey) {
                  moves.push("green"); console.log(moves);
              } else if (e.keyCode == downkey) {
                  moves.push("blue"); console.log(moves);
              } else {
              console.log(moves);
            }

      } if (moves.length === computer.length) {
        var result = []
         computer.forEach(function(value, index){
        if (value === moves[index]){
         // console.log('win');
          result.push('win');
        } else {
          //console.log('nope');
          result.push('nope');
          // return result;
       }
       console.log(result)
       if (result.indexOf('nope')>-1){
       console.log('lose');
      }else {
       console.log('win');
     }



 })

      }


 })
})























































































































































