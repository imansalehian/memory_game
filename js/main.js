//Initial stylesheet
//console.log("Up and running!");

//Array to hold four cards
var cards = [
  {
    rank:"queen",
    suit: "hearts",
    cardImage:"images/queen-of-hearts.png"
  },
  {
    rank:"queen",
    suit: "diamonds",
    cardImage:"images/queen-of-diamonds.png"
  },
  {
    rank:"king",
    suit: "hearts",
    cardImage:"images/king-of-hearts.png"
  },
  {
    rank:"king",
    suit: "diamonds",
    cardImage:"images/king-of-diamonds.png"
  }
];

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
  console.log("User flipped "+cards[cardId].rank);
  //add to the cardsInPlay array
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
}

flipCard(0);
flipCard(2);

//call check for match
checkForMatch();
