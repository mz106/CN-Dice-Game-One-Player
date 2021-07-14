
const btnRoll = document.getElementById('btn-roll');
const btnReset = document.getElementById('btn-reset');

let rollTally = 0;
let rollResult = 0;
let rollTotal = 0;
let gameOverTally = 0;

const dieOne = 'images/dieOne.svg';
const dieTwo = 'images/dieTwo.svg'
const dieThree = 'images/dieThree.svg'
const dieFour = 'images/dieFour.svg'
const dieFive = 'images/dieFive.svg'
const dieSix = 'images/dieSix.svg'

const paraResult = document.getElementById('para-result');
const paraRoll = document.getElementById('para-roll');
const paraScore = document.getElementById('para-score');

const middleText = document.getElementById('middle-text');

const dieArr = [dieOne, dieTwo, dieThree, dieFour, dieFive, dieSix];

const lost = () => {
    middleText.textContent = `You have rolled a 1 and lost. Click reset to play again.`;
    gameOverTally++;
};

const win = (par) => {
    middleText.textContent = `You have won with a score of ${par}. Click reset to play again.`;
    gameOverTally++;
};


const stop = () => {
    
        middleText.textContent = `Click reset to begin another game.`        
};

const process = () => {

    rollResult = Math.floor(Math.random() * 6 + 1);
    
    document.getElementById('img-die').src = dieArr[rollResult - 1];

    rollTotal += rollResult;
    rollTally++;
    
    paraResult.textContent = rollResult;
    paraRoll.textContent = rollTally;
    paraScore.textContent = rollTotal;
    middleText.textContent = `You rolled a ${rollResult} and your score is ${rollTotal}.`

    if (rollResult === 1) {
        lost();
    }

    if (rollTotal >= 20) {
        win(rollTotal);
    }
};


btnRoll.addEventListener('click', (e) => {
    if (gameOverTally === 0) {
        process();
    } else if (gameOverTally === 1) {
        stop();
    }
    
    console.log(gameOverTally)
});

btnReset.addEventListener('click', () => {
    rollResult = 0;
    rollTotal = 0;
    rollTally = 0;
    paraResult.textContent = 0;
    paraRoll.textContent = 0;
    paraScore.textContent = 0;
    middleText.textContent = 'To play the game, click roll.'
    rollResult = 0;

    gameOverTally--;
});



