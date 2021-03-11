'use strict'
//variables

//score section
const userLabel = document.querySelector('.user-label');
const compLabel = document.querySelector('.comp-label');
const message = document.querySelector('#result-message');
const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#comp-score');
let score = [0, 0];
let currentScore = 0;

//buttons
const btnAll = document.querySelectorAll('.selection')
const btnRock = document.querySelector('.btnRock');
const btnPaper = document.querySelector('.btnPaper');
const btnScissors = document.querySelector('.btnScissors');
const icons = document.querySelectorAll('.selection-pick')

//other
let computerSelection;
let selection = ['rock', 'paper', 'scissor'];
let roundWin1 = true;
let roundWin2 = false;
let draw = true;

function randomGen() {
    const randomElement = Math.floor(Math.random() * 3);
    computerSelection = selection[randomElement];
}

function liveScore() {
    userScore.textContent = score[0];
    compScore.textContent = score[1];

    if (roundWin1 == true && roundWin2 == false) {
        userLabel.classList.add('label-winner');
        compLabel.classList.remove('label-winner');
    } else if (roundWin2 == true && roundWin1 == false) {
        compLabel.classList.add('label-winner');
        userLabel.classList.remove('label-winner');
    } else {
        compLabel.classList.remove('label-winner');
        userLabel.classList.remove('label-winner');
        console.log('its working');
    }
}

if (score[0] >= 10 || score[1] >= 10) {

}

function playRound(user) {
    console.log(computerSelection)

    switch (true) {
        case (user === 'rock' && computerSelection === 'rock'):
        case (user === 'paper' && computerSelection === 'paper'):
        case (user === 'scissor' && computerSelection === 'scissor'):
            console.log("Tie!");
            message.textContent = "Game tied!";
            roundWin1 = false;
            roundWin2 = false;
            liveScore();
            break;

        case (user === 'rock' && computerSelection === 'scissor'):
        case (user === 'paper' && computerSelection === 'rock'):
        case (user === 'scissor' && computerSelection === 'paper'):
            console.log(`You win! ${user} beats ${computerSelection}`);
            message.textContent = `You win! ${user} beats ${computerSelection}!`
            roundWin1 = true;
            roundWin2 = false;
            score[0]++;
            liveScore();
            break;

        case (user === 'scissor' && computerSelection === 'rock'):
        case (user === 'rock' && computerSelection === 'paper'):
        case (user === 'paper' && computerSelection === 'scissor'):
            console.log(`You lose! ${computerSelection} beats ${user}`);
            message.textContent = `You lose! ${computerSelection} beats ${user}!`
            score[1]++;
            roundWin2 = true;
            roundWin1 = false;
            liveScore();
            break;

            // default:
            //     console.warn("No value was entered");
            //     console.log(typeof (user));
            //     console.log(typeof (computerSelection));
            //     break;
    }
}

for (let i = 0; i < btnAll.length; i++) {
    btnAll[i].addEventListener('click', function () {
        randomGen();
        playRound(selection[i]);

        if (btnAll[i].classList.contains('wave')) {
            btnAll[i].classList.remove('wave')
        } else {
            btnAll[i].classList.add('wave');
        }

    });
}

// function reset() {

// }