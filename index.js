const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const weapons = ['rock', 'paper', 'scissors'];
let computerWeapon = 0;

let playerWeapon = '';

let playerScore = 0;
let computerScore = 0;

console.log(playerScore, computerScore);

const computerChoice = () => {
    computerWeapon = Math.floor(Math.random() * weapons.length);
}

rock.onclick = () => {
    playerWeapon = 'rock';
    computerChoice();
    if(playerWeapon == weapons[computerWeapon]) {
        document.getElementById('message').innerHTML = 'Tie!';
    } else if (weapons[computerWeapon] == 'paper') {
        document.getElementById('computerScore').innerHTML = computerScore += 1;
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, computer wins the match!`;
        localStorage.setItem('computerScore', computerScore);
    } else if (weapons[computerWeapon] == 'scissors') {
        document.getElementById('playerScore').innerHTML = playerScore += 1;
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, player wins the match!`;
        localStorage.setItem('playerScore', playerScore);
    }
}

paper.onclick = () => {
    playerWeapon = 'paper';
    computerChoice();
    if(playerWeapon == weapons[computerWeapon]) {
        document.getElementById('message').innerHTML = 'Tie!';
    } else if (weapons[computerWeapon] == 'scissors') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, computer wins the match!`;
        document.getElementById('computerScore').innerHTML = computerScore += 1;
        localStorage.setItem('computerScore', computerScore);
    } else if (weapons[computerWeapon] == 'rock') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, player wins the match!`;
        document.getElementById('playerScore').innerHTML = playerScore += 1;
        localStorage.setItem('playerScore', playerScore);
    }
}

scissors.onclick = () => {
    playerWeapon = 'scissors';
    computerChoice();
    if(playerWeapon == weapons[computerWeapon]) {
        document.getElementById('message').innerHTML = 'Tie!';
    } else if (weapons[computerWeapon] == 'rock') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, computer wins the match!`;
        document.getElementById('computerScore').innerHTML = computerScore += 1;
        localStorage.setItem('computerScore', computerScore);
    } else if (weapons[computerWeapon] == 'paper') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, player wins the match!`;
        document.getElementById('playerScore').innerHTML = playerScore += 1;
        localStorage.setItem('playerScore', playerScore);
    }
}

window.onload = () => {
    if(localStorage.getItem('playerScore') == null && localStorage.getItem('computerScore') == null) {
        localStorage.setItem('playerScore', 0);
        localStorage.setItem('computerScore', 0);
    }
    document.getElementById('playerScore').innerHTML = localStorage.getItem('playerScore');
    document.getElementById('computerScore').innerHTML = localStorage.getItem('computerScore');
    playerScore = parseInt(localStorage.getItem('playerScore'));
    computerScore = parseInt(localStorage.getItem('computerScore'));
}

const resetScore = () => {
    playerScore = 0;
    computerScore = 0;
    localStorage.setItem('playerScore', 0);
    localStorage.setItem('computerScore', 0);
    document.getElementById('computerScore').innerHTML = localStorage.getItem('playerScore');
    document.getElementById('playerScore').innerHTML = localStorage.getItem('computerScore');
    document.getElementById('message').innerHTML = '';
}