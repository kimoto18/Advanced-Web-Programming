// Constants
const deck = [];
const playerCards = [];
const dealerCards = [];

// DOM Elements
const gameArea = document.querySelector('.game-area');
const dealBtn = document.getElementById('deal-btn');
const hitBtn = document.getElementById('hit-btn');
const standBtn = document.getElementById('stand-btn');

// Functions
function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    for (let suit of suits) {
        for (let value of values) {
            deck.push({suit, value});
        }
    }

    // Shuffle the deck
    deck.sort(() => Math.random() - 0.5);
}

function dealCards() {
    for (let i = 0; i < 2; i++) {
        playerCards.push(deck.pop());
        dealerCards.push(deck.pop());
    }

    displayCards();
}

function displayCards() {
    gameArea.innerHTML = '';

    playerCards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.textContent = `${card.value} of ${card.suit}`;
        gameArea.appendChild(cardDiv);
    });

    const dealerCardDiv = document.createElement('div');
    dealerCardDiv.textContent = `${dealerCards[0].value} of ${dealerCards[0].suit} (Hidden)`;
    gameArea.appendChild(dealerCardDiv);
}

// Event Listeners
dealBtn.addEventListener('click', () => {
    createDeck();
    dealCards();
});

hitBtn.addEventListener('click', () => {
    playerCards.push(deck.pop());
    displayCards();
});

standBtn.addEventListener('click', () => {
    // Implement the dealer's turn and determine winner
});
