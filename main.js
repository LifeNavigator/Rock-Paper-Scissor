'use strict';

let selection = ['Rock', 'Paper', 'Scissor'];

function computerPlay() {
    let selection = ['rock', 'paper', 'scissor'];
    const randomElement = Math.floor(Math.random() * selection.length);
    return selection[randomElement];
}

function playRound(playerSelection, computerSelection) {

    let user = playerSelection.toLowerCase();


    switch (true, true) {
        case (user === 'rock' && computerSelection === 'rock'):
        case (user === 'papwe' && computerSelection === 'paper'):
        case (user === 'scissor' && computerSelection === 'scissor'):
            return "Tie!";

        case (user === 'rock' && computerSelection === 'scissor'):
        case (user === 'paper' && computerSelection === 'rock'):
        case (user === 'scissor' && computerSelection === 'paper'):
            return `You win! ${user} beats ${computerSelection}`;

        case (user === 'scissor' && computerSelection === 'rock'):
        case (user === 'rock' && computerSelection === 'paper'):
        case (user === 'paper' && computerSelection === 'scissor'):
            return `You lose! ${computerSelection} beats ${user}`;

        default:
            console.log("No value was entered");
            console.log(typeof (user));
            console.log(typeof (computerSelection));
            break;
    }

}


const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
// const rounds = prompt("How many rounds?", 1);

// function game(rounds) {
//     for (let gameRounds = 1; gameRounds <= rounds; gameRounds++) {
//         playerSelection = prompt("Pick a choice", `rock`);
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game(2);

/*
 1. A window appears to choose a number of rounds
 2. The player picks a choice from selections
 3. (2) is looped.
*/