// Define card suits and values
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Declare variables for the deck and player/dealer hands
let deck = [];
let playerCards = [];
let dealerCards = [];
let playerScore = 0;
let dealerScore = 0;

// Function to create a new deck of cards
function createDeck() {
    for (let suit of suits) {
        for (let value of values) {
            let card = { suit, value };
            deck.push(card);
        }
    }
}

// Function to shuffle the deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

// Function to deal a card from the deck
function dealCard() {
    return deck.pop();
}

// Function to start a new game
function startGame() {
    // Reset game state
    deck = [];
    playerCards = [];
    dealerCards = [];
    playerScore = 0;
    dealerScore = 0;
    document.getElementById('result').innerText = '';

    // Create and shuffle a new deck
    createDeck();
    shuffleDeck();

    // Deal initial cards to player and dealer
    playerCards.push(dealCard());
    dealerCards.push(dealCard()); // Dealer's first card is face up
    playerCards.push(dealCard());
    dealerCards.push(dealCard()); // Dealer's second card is face down

    // Display cards on the screen
    displayCards();
    updateScores();
}


// Function to display cards on the screen
function displayCards() {
    displayPlayerCards();
    displayDealerCards();
}

// Function to display player's cards
function displayPlayerCards() {
    const playerCardsElement = document.getElementById('player-cards');
    playerCardsElement.innerHTML = '';
    playerCards.forEach(card => {
        const cardElement = createCardElement(card);
        playerCardsElement.appendChild(cardElement);
    });
}

// Function to display dealer's cards
function displayDealerCards() {
    const dealerCardsElement = document.getElementById('dealer-cards');
    dealerCardsElement.innerHTML = '';
    if (dealerCards.length === 2) {
        const cardElement = createHiddenCardElement();
        dealerCardsElement.appendChild(cardElement);
    } else {
        dealerCards.forEach(card => {
            const cardElement = createCardElement(card);
            dealerCardsElement.appendChild(cardElement);
        });
    }
}

// Function to create a card element
function createCardElement(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerText = `${card.value} ${card.suit}`;
    return cardElement;
}

// Function to create a hidden card element for the dealer's second card
function createHiddenCardElement() {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'hidden');
    cardElement.innerText = 'Hidden';
    return cardElement;
}

// Function to update scores
function updateScores() {
    // Calculate scores for player and dealer
    playerScore = calculateScore(playerCards);
    dealerScore = calculateScore(dealerCards.slice(1));
    
    // Display scores on the screen
    document.getElementById('player-score').innerText = `Score: ${playerScore}`;
    document.getElementById('dealer-score').innerText = `Score: ${dealerScore}`;
}

// Function to calculate score for a set of cards
function calculateScore(cards) {
    let score = 0;
    let hasAce = false;
    for (let card of cards) {
        if (card.value === 'A') {
            hasAce = true;
        }
        if (['J', 'Q', 'K'].includes(card.value)) {
            score += 10;
        } else if (card.value === 'A') {
            score += 1;
        } else {
            score += parseInt(card.value);
        }
    }
    // Handle Aces if score is less than or equal to 11
    if (hasAce && score + 10 <= 21) {
        score += 10;
    }
    return score;
}

// Function to handle player hitting
function hit() {
    // Deal a card to the player
    playerCards.push(dealCard());
    // Display updated cards and scores
    displayPlayerCards();
    updateScores();
    // Check if player busts
    if (playerScore > 21) {
        document.getElementById('result').innerText = 'You Bust! Dealer Wins.';
    }
}

// Function to handle player standing
function stand() {
    // Dealer draws cards until score is 17 or higher
    while (dealerScore < 17) {
        dealerCards.push(dealCard());
        dealerScore = calculateScore(dealerCards);  // Calculate the correct score for the dealer
    }
    // Display updated cards and scores
    displayDealerCards();
    updateScores();
    // Determine winner
    determineWinner();
}

// Function to handle double down
function doubleDown() {
    // Double the bet and deal one more card to the player
    playerCards.push(dealCard());
    // Display updated cards and scores
    displayPlayerCards();
    updateScores();
    // Player automatically stands after doubling down
    stand();
}

// Function to handle split
function split() {
    // Check if player has two cards of the same value
    if (playerCards.length === 2 && playerCards[0].value === playerCards[1].value) {
        // Deal another card to each hand and display updated cards
        playerCards.push(dealCard());
        dealerCards.push(dealCard());
        displayCards();
        updateScores();
    } else {
        // Alert the user that splitting is not allowed
        alert('Split is only allowed with two cards of the same value.');
    }
}

// Function to determine the winner
function determineWinner() {
    // Compare player's score with dealer's score and display result
    if (dealerScore > 21 || dealerScore < playerScore) {
        document.getElementById('result').innerText = 'You Win!';
    } else if (dealerScore > playerScore) {
        document.getElementById('result').innerText = 'Dealer Wins.';
    } else {
        document.getElementById('result').innerText = 'It\'s a Tie!';
    }
}

// Function to fetch random user data from the API
async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        // Generate a random 6-digit player ID
        const playerId = generateRandomId();

        // Display user information
        displayUser(user, playerId);
    } catch (error) {
        console.error('Error fetching random user:', error);
    }
}

// Random 6-digit player ID
function generateRandomId() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Function to display user info
function displayUser(user, playerId) {
    const userDisplay = document.querySelector('#user');
    userDisplay.innerHTML = `
        <div>
            <img src="${user.picture.large}"/>
            <div>
                <p>Name: ${user.name.first} ${user.name.last} </p>
                <p>Player ID: ${playerId}</p>
            </div>
        </div>
    `;
}

// Event Listener
document.querySelector('#js-generate').addEventListener('click', fetchUser);
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('hit-btn').addEventListener('click', hit);
document.getElementById('stand-btn').addEventListener('click', stand);
document.getElementById('double-down-btn').addEventListener('click', doubleDown);
document.getElementById('split-btn').addEventListener('click', split);

