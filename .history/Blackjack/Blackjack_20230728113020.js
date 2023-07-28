// Define player object
let player = {
    name: "Per",
    chips: 200
}

let dealer = {
    name: "Dealer",
    chips: 0
}

// Initialize variables
let playerCards = [];
let playerSum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// Get DOM elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let DealerSumEl = document.getElementById("dealerSum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");


// Function to get a random card value (1 to 11)
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}







// Set player name and chips on the webpage
// playerEl.textContent = player.name + ": $" + player.chips;


// // Function to start the game
// function startGame() {
//     isAlive = true;
//     let firstCard = getRandomCard();
//     let secondCard = getRandomCard();
//     playerCards = [firstCard, secondCard];
//     playerSum = firstCard + secondCard;
//     renderGame();
// }

// // Function to draw a new card
// function newCard() {
//     if (isAlive === true && hasBlackJack === false) {
//         let card = getRandomCard();
//         playerSum += card;
//         playerCards.push(card);
//         renderGame();
//     }
// }

// function noHit() {
//     if (playerSum <= dealerSum) {
//         message = "Do you want to draw a new card?";
//         renderGame();
//     } 
// }


// // Function to render the game state on the webpage
// function renderGame() {
//     cardsEl.textContent = "Cards: ";
//     for (let i = 0; i < playerCards.length; i++) {
//         cardsEl.textContent += cards[i] + " ";
//     }
    
//     sumEl.textContent = "Sum: " + playerSum;
    
//     if (playerSum <= 20) {
//         noHit(); 
//     } else if (playerSum === 21) {
//         message = "You've got Blackjack!";
//         hasBlackJack = true;
//     } else {
//         message = "You're out of the game!";
//         isAlive = false;
//     }
//     messageEl.textContent = message;
// }


