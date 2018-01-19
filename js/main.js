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
  alert("You found a match!");
  } else {
  alert("Sorry, try again.");
  }
};

//function to log and store flipped cards
var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  //log which card user flipped
  console.log("User flipped "+cards[cardId].rank);
  //add to the cardsInPlay array
  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src',cards[cardId].cardImage);

  if (cardsInPlay.length===2) {
    checkForMatch();
    cardsInPlay = [];
  }
};
//function to create board
var createBoard = function () {
  for (var i=0; i < cards.length; i++){
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src','images/back.png');
  cardElement.setAttribute('data-id',i);

  cardElement.addEventListener('click',flipCard);

  document.getElementById('game-board').appendChild(cardElement);
 }
}

createBoard();

//call check for match
checkForMatch();
