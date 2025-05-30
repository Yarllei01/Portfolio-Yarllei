const icons = ['🚗', '🚀', '🚁', '🛸', '🚲', '🛴', '🛶', '⛵'];
let cards = [...icons, ...icons]; // 16 cartas (8 pares)
let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoard() {
  const board = document.getElementById('gameBoard');
  shuffle(cards);
  cards.forEach((icon, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.icon = icon;
    card.dataset.index = index;
    card.innerHTML = '';
    card.addEventListener('click', handleFlip);
    board.appendChild(card);
  });
}

function handleFlip(e) {
  const card = e.target;
  if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) {
    return;
  }

  card.classList.add('flipped');
  card.innerHTML = card.dataset.icon;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.icon === card2.dataset.icon) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCards.push(card1, card2);
    flippedCards = [];

    if (matchedCards.length === cards.length) {
      setTimeout(() => {
        alert(' Parabéns! Você achou todos os pares montados ');
        location.reload();
      }, 600);
    }
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1.innerHTML = '';
      card2.innerHTML = '';
      flippedCards = [];
    }, 1000);
  }
}

createBoard();
