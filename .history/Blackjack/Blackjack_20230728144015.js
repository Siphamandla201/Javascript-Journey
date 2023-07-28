// Define player object
let player = {
    name: "Per",
    chips: 200
}

let dealer = {
    name: "Dealer",
    chips: 0
}


// Initialize player variables
let playerCards = [];
let playerSum = 0;
let hasBlackJack = false;
let isAlive = false;
let playerDone = false;
let message = "";

// Initialize player variables
let dealerCards = [];
let dealerSum = 0;
let showDealerCards = false;
let dealerIsAlive = false;
let dealerHasBlackJack = false;
let dealerDone = false;

// Get DOM elements
let messageEl = document.getElementById("message-el");

let playerSumEl = document.getElementById("playerSum-el");
let DealerSumEl = document.getElementById("dealerSum-el");


let playerCardsEl = document.getElementById("playerCards-el");
let dealerCardsEl = document.getElementById("dealerCards-el");

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

function startGame() {
    let playerFirstCard = getRandomCard();
    let playerSecondCard = getRandomCard();
    let dealerFirstCard = getRandomCard();
    let dealerSecondCard = getRandomCard();
    isAlive = true
    
    playerCards = [playerFirstCard, playerSecondCard]
    playerSum = playerFirstCard + playerSecondCard;
    
    dealerCards = [dealerFirstCard, dealerSecondCard]
    dealerSum = dealerFirstCard + dealerSecondCard;
    renderGame();
}

function renderGame() {
    // Showing Player Cards
    playerCardsEl.textContent = "Player Cards : ";
    for (let i = 0; i < playerCards.length; i++) {
        playerCardsEl.textContent += playerCards[i] + " + ";
    }
    
    playerSumEl.textContent = "Player Sum : " + playerSum;
    
    // Showing Dealer Cards
    dealerCardsEl.textContent = "Dealer Cards : ";
    for (let i = 0; i < dealerCards.length; i++) {
        console.log(dealerCards);
        dealerCardsEl.textContent += dealerCards[i] + " + ";
    }
    
    DealerSumEl.textContent = "Dealer Sum : " + dealerSum;

    cardHandling()
}

// Function to draw a new card
function Hit() {
    if (isAlive && !hasBlackJack && !playerDone) { // Check if the player is alive, doesn't have Blackjack, and hasn't stood yet
        let extraCard = getRandomCard();
        playerSum += extraCard;
        playerCards.push(extraCard);
        renderGame();
        cardHandling(); // Check the game status after the new card is drawn
    }
}


// Function to indicate the player has chosen to stand (not draw more cards)
function noHit() {
    if (isAlive && !hasBlackJack && !playerDone) { // Check if the player is alive, doesn't have Blackjack, and hasn't stood yet
        playerDone = true; // Set the playerDone flag to indicate the player has stood
        cardHandling(); // Check the game status after the player has stood
    }
}

function dealerDrawCard() {
    if (!dealerDone && dealerSum < 17) {
        let extraCard = getRandomCard();
        dealerSum += extraCard;
        dealerCards.push(extraCard);
    }
}


function cardHandling() {
        // Scenario 1: Player has Blackjack (sum of first two cards is 21)
    if (playerSum === 21 && playerCards.length === 2) {
        message = "You've got Blackjack! You Win!";
        hasBlackJack = true;
        isAlive = true;
        playerDone = true;

    } else if (playerSum <= 20 && !hasBlackJack) { // Scenario 2: Player is still in the game and can choose to Hit or No Hit
        message = "Hit Or No Hit";
        isAlive = true;
        playerDone = false;

    } else if (playerSum > 21) { // Scenario 3: Player's sum exceeds 21 (bust)
        message = "Busted! You're out of the game!";
        isAlive = false;
        playerDone = true;
    
    } if (isAlive && !hasBlackJack && playerDone) {
        message = "You stood. Dealer's turn.";
    } else if (!dealerDone && dealerSum < 17) { // Scenario 5: Dealer's turn - Dealer's sum is less than 17
        dealerDrawCard();
    
    } else if (dealerSum === 21 && dealerCards.length === 2) { // Scenario 6: Dealer's turn - Dealer has Blackjack
        message = "Dealer has Blackjack! You Lose!";
        dealerHasBlackJack = true;
        dealerIsAlive = true;
        dealerDone = true;
    
    } else if (dealerSum > 21) { // Scenario 7: Dealer's turn - Dealer's sum exceeds 21 (bust)
        message = "Dealer Busted! You Win!";
        dealerIsAlive = false;
        dealerDone = true;

    } else if (playerDone && dealerDone) { // Scenario 8: Both player and dealer are done drawing cards, compare sums
        if (playerSum === dealerSum) {
            message = "It's a draw!";

        } else if (playerSum > dealerSum) {
            message = "You Win!";

        } 
    }
    
    messageEl.textContent = message;
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


