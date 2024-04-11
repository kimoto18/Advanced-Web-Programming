// Define card suits and values
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Create deck of cards
let deck = [];

// Function to create deck
function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ value, suit });
        }
    }
}

// Function to shuffle deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Function to deal card
function dealCard() {
    return deck.pop();
}

// Function to calculate hand value
function calculateHandValue(hand) {
    let sum = 0;
    let aceCount = 0;
    for (let card of hand) {
        if (card.value === 'A') {
            aceCount++;
            sum += 11;
        } else if (['J', 'Q', 'K'].includes(card.value)) {
            sum += 10;
        } else {
            sum += parseInt(card.value);
        }
    }
    while (sum > 21 && aceCount > 0) {
        sum -= 10;
        aceCount--;
    }
    return sum;
}

// Function to display hand
function displayHand(hand, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    hand.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.textContent = `${card.value} ${card.suit}`;
        container.appendChild(cardDiv);
    });
}

// Initialize game
createDeck();
shuffleDeck();

// Global variables
let playerHand = [];
let dealerHand = [];

// Event listeners
document.getElementById('deal-button').addEventListener('click', deal);
document.getElementById('hit-button').addEventListener('click', hit);
document.getElementById('stand-button').addEventListener('click', stand);

// Deal initial cards
function deal() {
    playerHand = [dealCard(), dealCard()];
    dealerHand = [dealCard(), dealCard()];
    displayHand(playerHand, 'player-hand');
    displayHand(dealerHand, 'dealer-hand');
    updateScores();
    checkForBlackjack();
}

// Player hits
function hit() {
    playerHand.push(dealCard());
    displayHand(playerHand, 'player-hand');
    updateScores();
    checkForBust();
}

// Player stands
function stand() {
    while (calculateHandValue(dealerHand) < 17) {
        dealerHand.push(dealCard());
    }
    displayHand(dealerHand, 'dealer-hand');
    updateScores();
    checkWinner();
}

// Update scores
function updateScores() {
    document.getElementById('player-score').textContent = `Player Score: ${calculateHandValue(playerHand)}`;
    document.getElementById('dealer-score').textContent = `Dealer Score: ${calculateHandValue(dealerHand)}`;
}

// Check for player blackjack
function checkForBlackjack() {
    if (calculateHandValue(playerHand) === 21) {
        document.getElementById('message').textContent = 'Blackjack! Player wins!';
    }
}

// Check for player bust
function checkForBust() {
    if (calculateHandValue(playerHand) > 21) {
        document.getElementById('message').textContent = 'Bust! Dealer wins!';
    }
}

// Check winner
function checkWinner() {
    const playerScore = calculateHandValue(playerHand);
    const dealerScore = calculateHandValue(dealerHand);
    if (dealerScore > 21 || playerScore > dealerScore) {
        document.getElementById('message').textContent = 'Player wins!';
    } else if (playerScore < dealerScore) {
        document.getElementById('message').textContent = 'Dealer wins!';
    } else {
        document.getElementById('message').textContent = 'It\'s a tie!';
    }
}

// Function to display hand
function displayHand(hand, elementId, hideDownCard) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    hand.forEach((card, index) => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.textContent = index === 0 && hideDownCard ? 'Hidden' : `${card.value} ${card.suit}`;
        container.appendChild(cardDiv);
    });
}

// Deal initial cards
function deal() {
    playerHand = [dealCard(), dealCard()];
    dealerHand = [dealCard(), dealCard()];
    displayHand(playerHand, 'player-hand');
    displayHand(dealerHand, 'dealer-hand', true); // Hide the dealer's down card
    updateScores();
    checkForBlackjack();
}


