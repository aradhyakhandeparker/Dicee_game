
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//print total
var total = randomNumber1+randomNumber2;
document.querySelector("h2").innerHTML="Total = "+total;
