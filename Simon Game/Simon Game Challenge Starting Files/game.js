var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var wsnd = new Audio("sounds/wrong.mp3");

$(document).keypress(function(){
  if(level < 1){
      nextSequence();
  }
});

$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  makeSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
})

function nextSequence() {
  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
    console.log(gamePattern);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  // $("#" + randomChosenColour).click(function(){ $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100) }) ;
  makeSound(randomChosenColour);
  $("h1").text("Level: " + level);

}

// for (var n = 0; n < $(".btn").length; n++) {
//   $(".btn")[n].addEventListener("click", function() {
//     nextSequence();
//   })
// }

function makeSound(name) {
      var snd = new Audio('sounds/' + name + '.mp3');
      snd.play();
}

function animatePress(currentColour){
$("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
  if(userClickedPattern.length == gamePattern.length){
    setTimeout(function(){
      nextSequence();
    }, 1000);
    console.log("success");

  }} else {
    startOver();
  }
}

function gameOver(){
$("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  }, 200);
}

function startOver (){
  $("h1").text("Game Over, Press Any Key to Restart (Your Level was: " + level + ")");
  wsnd.play();
  gameOver();
  console.log("wrong");
  level = 0;
  gamePattern = [];
}
