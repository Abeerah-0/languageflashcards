let currentLanguage = 'english'; 
let flashcards = {
  english: [
    { word: 'Hello', translation: 'Merhaba' },
    { word: 'Goodbye', translation: 'Hoşça kal' },
    { word: 'Please', translation: 'Lütfen' },
    { word: 'Thank you', translation: 'Teşekkür ederim' },
    { word: 'Sorry', translation: 'Üzgünüm' },
    { word: 'Yes', translation: 'Evet' },
    { word: 'No', translation: 'Hayır' },
    { word: 'Good morning', translation: 'Günaydın' },
    { word: 'Good night', translation: 'İyi geceler' },
    { word: 'How are you?', translation: 'Nasılsınız?' }
  ],
  turkish: [
    { word: 'Merhaba', translation: 'Hello' },
    { word: 'Hoşça kal', translation: 'Goodbye' },
    { word: 'Lütfen', translation: 'Please' },
    { word: 'Teşekkür ederim', translation: 'Thank you' },
    { word: 'Üzgünüm', translation: 'Sorry' },
    { word: 'Evet', translation: 'Yes' },
    { word: 'Hayır', translation: 'No' },
    { word: 'Günaydın', translation: 'Good morning' },
    { word: 'İyi geceler', translation: 'Good night' },
    { word: 'Nasılsınız?', translation: 'How are you?' }
  ],
  german: [
    { word: 'Hallo', translation: 'Hello' },
    { word: 'Tschüss', translation: 'Goodbye' },
    { word: 'Bitte', translation: 'Please' },
    { word: 'Danke', translation: 'Thank you' },
    { word: 'Entschuldigung', translation: 'Sorry' },
    { word: 'Ja', translation: 'Yes' },
    { word: 'Nein', translation: 'No' },
    { word: 'Guten Morgen', translation: 'Good morning' },
    { word: 'Gute Nacht', translation: 'Good night' },
    { word: 'Wie geht’s?', translation: 'How are you?' }
  ]
};

let currentFlashcards = flashcards[currentLanguage];
let currentIndex = 0;

const languageSelect = document.getElementById('language');
const difficultySelect = document.getElementById('difficulty');
const flipCardBtn = document.getElementById('flipCardBtn');
const nextCardBtn = document.getElementById('nextCardBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn = document.getElementById('resetBtn');
const progress = document.getElementById('progress');
const flashcardContainer = document.querySelector('.flashcard');

languageSelect.addEventListener('change', updateLanguage);
flipCardBtn.addEventListener('click', flipCard);
nextCardBtn.addEventListener('click', nextCard);
shuffleBtn.addEventListener('click', shuffleCards);
resetBtn.addEventListener('click', resetSession);

function updateLanguage() {
  currentLanguage = languageSelect.value;
  currentFlashcards = flashcards[currentLanguage];
  document.body.classList.remove('english', 'turkish', 'german');
  document.body.classList.add(currentLanguage);
  resetFlashcard();
}

function resetFlashcard() {
  currentIndex = 0;
  displayCard();
  updateProgress();
}

function displayCard() {
  const currentCard = currentFlashcards[currentIndex];
  flashcardContainer.querySelector('.front').textContent = currentCard.word;
  flashcardContainer.querySelector('.back').textContent = currentCard.translation;
  flashcardContainer.classList.remove('flip');
}

function flipCard() {
  flashcardContainer.classList.toggle('flip');
}

function nextCard() {
  currentIndex = (currentIndex + 1) % currentFlashcards.length;
  displayCard();
  updateProgress();
}

function shuffleCards() {
  currentFlashcards = shuffle(currentFlashcards);
  currentIndex = 0;
  displayCard();
  updateProgress();
}

function resetSession() {
  currentIndex = 0;
  displayCard();
  updateProgress();
}

function updateProgress() {
  progress.textContent = `Card ${currentIndex + 1}/${currentFlashcards.length}`;
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex, temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
