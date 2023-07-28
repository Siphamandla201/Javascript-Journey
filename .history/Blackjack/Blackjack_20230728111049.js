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

// Set player name and chips on the webpage
// playerEl.textContent = player.name + ": $" + player.chips;

?
