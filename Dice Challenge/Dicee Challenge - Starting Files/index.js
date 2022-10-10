var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Won!";
}
else{
  document.querySelector("h1").innerHTML = "Player 1 Won!";
}
