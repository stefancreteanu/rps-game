const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const weapons = ['rock', 'paper', 'scissors'];
let computerWeapon = 0;

let playerWeapon = '';

let playerScore = 0;
let computerScore = 0;

rock.onclick = () => {
    playerWeapon = 'rock';
    computerWeapon = Math.floor(Math.random() * weapons.length);
    if(playerWeapon == weapons[computerWeapon]) {
        document.getElementById('message').innerHTML = 'Tie!';
    } else if (playerWeapon == 'rock' && weapons[computerWeapon] == 'paper') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, computer wins the match`;
        document.getElementById('computerScore').innerHTML = computerScore += 1;
    } else if (playerWeapon == 'rock' && weapons[computerWeapon] == 'scissors') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, player wins the match`;
        document.getElementById('playerScore').innerHTML = playerScore += 1;
    }
    console.log(playerWeapon);
    console.log(weapons[computerWeapon]);
}

paper.onclick = () => {
    playerWeapon = 'paper';
    computerWeapon = Math.floor(Math.random() * weapons.length);
    if(playerWeapon == weapons[computerWeapon]) {
        document.getElementById('message').innerHTML = 'Tie!';
    } else if (playerWeapon == 'paper' && weapons[computerWeapon] == 'scissors') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, computer wins the match`;
        document.getElementById('computerScore').innerHTML = computerScore += 1;
    } else if (playerWeapon == 'paper' && weapons[computerWeapon] == 'rock') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, player wins the match`;
        document.getElementById('playerScore').innerHTML = playerScore += 1;
    }
    console.log(playerWeapon);
    console.log(weapons[computerWeapon]);
}

scissors.onclick = () => {
    playerWeapon = 'scissors';
    computerWeapon = Math.floor(Math.random() * weapons.length);
    if(playerWeapon == weapons[computerWeapon]) {
        document.getElementById('message').innerHTML = 'Tie!';
    } else if (playerWeapon == 'scissors' && weapons[computerWeapon] == 'rock') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, computer wins the match`;
        document.getElementById('computerScore').innerHTML = computerScore += 1;
    } else if (playerWeapon == 'scissors' && weapons[computerWeapon] == 'paper') {
        document.getElementById('message').innerHTML = `Computer has chosen ${weapons[computerWeapon]}, player wins the match`;
        document.getElementById('playerScore').innerHTML = playerScore += 1;
    }
    console.log(playerWeapon);
    console.log(weapons[computerWeapon]);
}

const resetScore = () => {
    document.getElementById('computerScore').innerHTML = 0;
    document.getElementById('playerScore').innerHTML = 0;
}