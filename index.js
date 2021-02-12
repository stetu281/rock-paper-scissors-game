let buttons = document.querySelectorAll('.btn');
let wins = document.querySelector('.wins');
let draws = document.querySelector('.draws');
let losses = document.querySelector('.losses');


for(let button of buttons) {
    button.addEventListener('click', function(e) {
        let playerChoice = e.target.id;
        let computerChoice = randomChoice();
        document.querySelector('.player-choice').innerHTML = playerChoice;
        document.querySelector('.computer-choice').innerHTML = computerChoice;
        let result = gameLogic(playerChoice, computerChoice);
        document.querySelector('.result').innerHTML = result;
        updateStats(result);
    })
}


function updateStats(result) {
    if(result === 'You win') {
        wins.innerHTML = parseInt(wins.innerHTML) + 1;
    } else if(result === 'You loose') {
        losses.innerHTML = parseInt(losses.innerHTML) + 1;
    } else {
        draws.innerHTML = parseInt(draws.innerHTML) + 1;
    }
};


function randomChoice() {
    let randomNum = Math.floor(Math.random() * 9);
    if(randomNum < 3) {
        return 'Rock';
    } else if (randomNum > 5) {
        return 'Scissors';
    } else {
        return 'Paper';
    }
};


function gameLogic(player, computer) {
    if(player === 'Rock') {
        if(computer === 'Paper') {
            return 'You loose';
        } else if (computer === 'Scissors') {
            return 'You win';
        } else {
            return 'It\'s a draw';
        }
    } else if(player === 'Paper') {
        if(computer === 'Rock') {
            return 'You win';
        } else if (computer === 'Scissors') {
            return 'You loose';
        } else {
            return 'It\'s a draw';
        }
    } else {
        if(computer === 'Rock') {
            return 'You loose';
        } else if (computer === 'Paper') {
            return 'You win';
        } else {
            return 'It\'s a draw';
        }
    }
}