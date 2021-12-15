// start
document.getElementById('dealgame').classList.toggle('disabled');
document.getElementById('hitgame').classList.toggle('disabled');
document.getElementById('staygame').classList.toggle('disabled');
document.getElementById('newgame').classList.toggle('disabled');

const suits = ["♠", "♣", "♥", "♦"];
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let deck = [];
  let countercards = 4;
  // define let dealertext
  let dealerCards; 
  let dealerIndex = [];

  // define let playertext
  let playerCards; 
  let playerIndex = [];

for (let i = 0; i < values.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    deck.push(values[i] + suits[j]);
  }
}
console.log(deck);



// dealgame
let newGame = document.getElementById('newgame');
newGame.addEventListener('click', function(){
  document.getElementById('dealgame').classList.toggle('disabled');
  document.getElementById('newgame').classList.toggle('disabled');
  shuflegame();
});
// shufle deck


function shuflegame(){
  let indexA = deck.length;
  let indexR;

  while (indexA != 0) {
    indexR = Math.floor(Math.random() * indexA);
    indexA--;

    [deck[indexA], deck[indexR]] = [deck[indexR],deck[indexA]]; 
  }
  console.log(deck);
  // let dealertext
  countercards = 4;
  dealerCards = 'Dealer: <div class="cardborder">' + deck[0] + '</div>, <div class="cardborder">XX</div>'; 
  dealerIndex.push(deck[0]);
  dealerIndex.push(deck[1]);

  // let playertext
  playerCards = 'Player: <div class="cardborder">' + deck[2] + '</div>, <div class="cardborder">' + deck[3] + '</div>'; 
  playerIndex.push(deck[2]);
  playerIndex.push(deck[3]);

}

let dealGame = document.getElementById('dealgame');
dealGame.addEventListener('click', function(){
  document.getElementById('dealgame').classList.toggle('disabled');
  document.getElementById('hitgame').classList.toggle('disabled');
  document.getElementById('staygame').classList.toggle('disabled');
  // Show cards
  document.getElementById('dealertext').innerHTML = dealerCards;
  document.getElementById('playertext').innerHTML = playerCards;
  // comparison

  // points

});


// hit stay
let stayButton = document.getElementById('staygame');
stayButton.addEventListener('click', function () {
  document.getElementById('hitgame').classList.toggle('disabled');
  document.getElementById('staygame').classList.toggle('disabled');
  document.getElementById('newgame').classList.toggle('disabled');
  dealerCards = 'Dealer: <div class="cardborder">' + deck[0] + '</div>, <div class="cardborder">' + deck[1] + '</div>';
  document.getElementById('dealertext').innerHTML = dealerCards;
  // if lower than 16
  // trow another cards
  // if lower than playerCards
  // trow another cards
  // if bigger than player house wins
});

// hit hit
let hitButton = document.getElementById('hitgame');
hitButton.addEventListener('click', function () {
  playerCards += ', <div class="cardborder">' + deck[countercards] + '</div>';
  document.getElementById('playertext').innerHTML = playerCards;
  // update dealerIndex
  dealerIndex.push(deck[countercards]);
  countercards++;
  console.log(dealerIndex);
  console.log(playerIndex);
  
});
// calculate
// 


// restart


function changeStringToInt(value) {
	let cards;
	if (value === "1♠" || value === "1♣" || value === "1♥" || value === "1♦") {
	    cards = 1;
	} else if  (value === "2♠" || value === "2♣" || value === "2♥" || value === "2♦") {
	    cards = 2;
    } else if  (value === "3♠" || value === "3♣" || value === "3♥" || value === "3♦") {
	    cards = 3;
    } else if  (value === "4♠" || value === "4♣" || value === "4♥" || value === "4♦") {
	    cards = 4;
    } else if  (value === "5♠" || value === "5♣" || value === "5♥" || value === "5♦") {
	    cards = 5;
    } else if  (value === "6♠" || value === "6♣" || value === "6♥" || value === "6♦") {
	    cards = 6;
    } else if  (value === "7♠" || value === "7♣" || value === "7♥" || value === "7♦") {
	    cards = 7;	
    } else if  (value === "8♠" || value === "8♣" || value === "8♥" || value === "8♦") {
	    cards = 8;
    } else if  (value === "9♠" || value === "9♣" || value === "9♥" || value === "9♦") {
	    cards = 9;
    } else if  (value === "10♠" || value === "10♣" || value === "10♥" || value === "10♦") {
	    cards = 10;
    } else if  (value === "11♠" || value === "11♣" || value === "11♥" || value === "11♦") {
	    cards = 11;	 
    } else if  (value === "12♠" || value === "12♣" || value === "12♥" || value === "12♦") {
	    cards = 12;
    } else {
		cards = 13;
	} 
    return cards;
}
