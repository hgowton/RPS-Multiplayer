import { stopConfetti, startConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const playerGameIcons = document.querySelectorAll('.far');
const computerGameIcons = document.querySelectorAll('.fas');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

//Reset all selected icons
function resetSelected() {
  stopConfetti();
  removeConfetti();
  playerGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });

  computerGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
  });
}

//Reset Score & player/computer Choice
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;

//Creates a random choice for computer
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if(computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
}

//Add selected styling and computer choice
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}

//
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie!";
  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      startConfetti();
    } else {
      resultText.textContent = "You Lost!";
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }

}


//Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

//Passing player selection value and styling icon
function select(playerChoice) {
  checkResult(playerChoice);

  //Add 'selected' styling & update PlayerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
}
window.select = select;

//On Start Up
resetAll();



