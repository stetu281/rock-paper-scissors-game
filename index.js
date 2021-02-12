let buttons = document.querySelectorAll('.btn');

for(let button of buttons) {
    button.addEventListener('click', function(e) {
        let playerChoice = e.target.id;
        let computerChoice = randomChoice();
        console.log(playerChoice, computerChoice);
    })
}





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
