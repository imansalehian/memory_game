//Initial stylesheet
console.log("Up and running!");
//Display what the user flipped
//console.log("User flipped " + cardOne);
//Array to hold four cards
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[cardsInPlay.length-1]);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
  alert("It's a match!");
}
 else {
  alert ("Sorry, try again.");
}
