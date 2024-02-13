let random = parseInt(Math.random()*100 +1);
console.log(random)

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhigh = document.querySelector('.lowOrhigh');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame){
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if ( guess<1 || guess > 100 || isNaN(guess)) {
        alert('Please enter valid number')
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 10){
            dispGuess(guess)
            dispMessage(`Game Over , the number wad ${random}`)
            endGame()
        }else {
            dispGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        dispMessage("You guessed it Right");
        endGame();
    }else if (guess < random || guess > random ) {
        dispMessage("You guess was wrong");
    }
}

function dispGuess(guess) {
    userInput.value = '';
    guess.innerHTML += `${guess}    `;
    numGuess ++;
    remaining.innerHTML = `${10 - numGuess}`;
}

function dispMessage(message) {
    lowOrhigh.innerHTML = `<h2>{message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame()
}  

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        random = randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 0;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}