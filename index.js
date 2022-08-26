// first image
var n = Math.random()*6;
n = Math.floor(n)+1;
var diceimg = "images/dice" +n+ ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",diceimg);

// second image

var n1 = Math.floor(Math.random()*6)+1;
var diceimg1 = "images/dice"+n1+".png";
var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src",diceimg1);

if(n>n1){
    document.querySelector("h1").innerHTML = "Player 1 Wins🏆";
}else if (n<n1){
    document.querySelector("h1").innerHTML = "Player 2 Wins🏆";
}else{
    document.querySelector("h1").innerHTML = "It's a Draw🙆";
}