$(document).ready(function(){

  // setup var values
  var colors= ["green", "red", "blue", "yellow"];
  var green = [0];
  var red = [1];
  var blue = [2];
  var yellow = [3];
  var computer = [];

  //setting up players move inputs with arrow keys
  var moves = [];
  var upkey = '38';
  var rightkey = '39';
  var downkey =  '40';
  var leftkey = '37';

  //computer pick color.
  var randomColors = function(){
    for(i = 0; i < computer.length; i++);
    var rand = Math.floor(Math.random() * colors.length)
    computer.push(rand);
    console.log(computer)
    if (rand == 0) {
       $(".green").toggleClass('change');
    } else if (rand == 1) {
       $(".red").toggleClass('change');
    } else if (rand == 2) {
      $(".blue").toggleClass('change');
    } else if (rand == 3) {
      $(".yellow").toggleClass('change');
    }
  }
  randomColors(); //call to make cpu pick color.

  //used @keyframes animation to get the arrow keys to transition opacity
  $(document).keydown(function(e) {
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
    }
    //debugger
    // if computer.last !== moves.last
      //game over, reset variables, recall randomcolor()
      if (computer.last !== moves.last){
        randomColors();alert("you lose")
      }

    //if computer.last === movest.last
      //increment a counter (add up a highscore)
      //recall randomColors() - do not reset variables.
      if (computer.last === moves.last){
        randomColors();
      }

  })//closes keydown


})//closes onReady

