//Initial stylesheet
//console.log("Up and running!");

//Array to hold four cards
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

//function to check for match
var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
}

//function to log and store flipped cards
var flipCard = function(cardId){
  //log which card user flipped
  console.log("User flipped "+cards[cardId]);
  //add to the cardsInPlay array
  cardsInPlay.push(cards[cardId]);
}

flipCard(0);
flipCard(2);

//call check for match
checkForMatch();
