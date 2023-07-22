let totalScore = {
  tails: 0,
  heads: 0
};


const savedScore = localStorage.getItem('totalScore');
if (savedScore) {
  totalScore = JSON.parse(savedScore);
}

updateScore();

let timeoutID;

function randomizerSystem() {
  let randomNumber = Math.random();
  let result = '';

  if (randomNumber < 1 / 3 ||
    randomNumber > 1 / 5 &&
    randomNumber < 1 / 8) {
    result = 'Tails';
  }
  else {
    result = 'Heads';
  }

  localStorage.setItem('totalScore', JSON.stringify(totalScore));

  resultTeller(result);


  document.querySelector('.fullscreen').classList.add('page-blur');
  spinningCoin();

  timeoutID = setTimeout(function () {
    resultImage(result);
  }, 4000);
  setTimeout(removeBlur, 4000);


}

function resultTeller(result) {
  if (result === 'Tails') {
    totalScore.tails++
  }
  else {
    totalScore.heads++
  }

  updateScore();
}

function updateScore() {
  document.querySelector('.js-score').innerHTML =
    `Tails: ${totalScore.tails}  Heads: ${totalScore.heads}`;

  document.querySelector('.js-result-image').src = '';
  document.querySelector('.js-result-text').innerHTML = '';

  removeBlur();
}

function resultImage(result) {
  if (result === 'Heads') {
    document.querySelector('.js-result-image').src = 'images/heads.png';
    document.querySelector('.js-result-text').innerHTML = 'HEADS';
  }
  else {
    document.querySelector('.js-result-image').src = 'images/tails.png';
    document.querySelector('.js-result-text').innerHTML = 'TAILS';
  }
}

function removeBlur() {
  document.querySelector('.fullscreen').classList.remove('page-blur');
  document.querySelector('.js-spinning-coin').classList.remove('spinning-coin');

  document.querySelector('.js-spinning-coin').src = ''
}

function spinningCoin() {
  document.querySelector('.js-spinning-coin').src = 'images/spinningCoin.png'
  document.querySelector('.js-spinning-coin').classList.add('spinning-coin')
}