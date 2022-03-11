var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 === randomNumber2){
  document.querySelector("h2").innerHTML = "It's a draw!";
}

else if(randomNumber1 > randomNumber2){
  document.querySelector("h2").innerHTML = "Player 1 wins!! 🚩"
}

else{
  document.querySelector("h2").innerHTML = "Player 2 wins!! 🚩"
}
/*
var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);
*/
