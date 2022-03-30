playerScore = 0;
computerScore = 0;
//const playerOptions = [Rock,Paper,Scissors];
 
//Computer generated answer-random
function computerPlay() {
  const computerOptions = ['Rock','Paper','Scissors'];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
  } 

  //if else determining who won, you or the computer
function playRound(playerchoicelns, computerPlay) {
if (playerchoicelns == 'Rock' && computerPlay == 'Paper') {
  computerScore++;
  document.getElementById('c-count').textContent = computerScore.toString();
  document.getElementById('ann').textContent = 'LOSER';

} else if (playerchoicelns == 'Rock' && computerPlay == 'Scissors'){
  playerScore++;
  document.getElementById('p-count').textContent = playerScore.toString();
  document.getElementById('ann').textContent = 'Winner';
  
} else if (playerchoicelns == 'Paper' && computerPlay == 'Rock'){
  playerScore++;
  document.getElementById('p-count').textContent = playerScore.toString();
  document.getElementById('ann').textContent = 'Winner';


} else if (playerchoicelns == 'Paper' && computerPlay == 'Scissors'){
  computerScore++;
  document.getElementById('c-count').textContent = computerScore.toString();
  document.getElementById('ann').textContent = 'LOSER';return console.log("Loser");


} else if (playerchoicelns == 'Scissors' && computerPlay == 'Rock'){ 
  computerScore++;
  document.getElementById('c-count').textContent = computerScore.toString();
  document.getElementById('ann').textContent = 'LOSER';


} else if (playerchoicelns == 'Scissors' && computerPlay == 'Paper'){
  playerScore++;
  document.getElementById('p-count').textContent = playerScore.toString();
  document.getElementById('ann').textContent = 'Winner';


} else {
  document.getElementById('ann').textContent = 'Try Again';
}
if (playerScore == '5') {
  document.location.reload();

} else if (computerScore == '5') {
  document.location.reload();
 
}

}


/*function game() {
  for (let i = 0; i < 5; i++) {
    let playerchoice = prompt("Please choose Rock, Paper, or Scissors");
    playerchoicel = playerchoice.toLowerCase();
    playerchoicelns = playerchoicel.replace(/\s/g, "");
    const computerSelection = computerPlay();
    console.log(playRound(playerchoicelns, computerSelection));
  }}
game() */
/*
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
    button.addEventListener("click", function game(){ 
    let playerchoice = prompt("Please choose Rock, Paper, or Scissors");
    playerchoicel = playerchoice.toLowerCase();
    playerchoicelns = playerchoicel.replace(/\s/g, "");
    const computerSelection = computerPlay();
    alert(playRound(playerchoicelns, computerSelection));
  });
  });
}
*/
const Rock = document.querySelector('#Rock');
Rock.addEventListener('click' , () => {
playRound("Rock", computerPlay());

});

const Paper = document.querySelector('#Paper');
Paper.addEventListener('click' , () => {
playRound("Paper", computerPlay());

});

const Scissors = document.querySelector('#Scissors');
Scissors.addEventListener('click' , () => {
playRound("Scissors", computerPlay());

});

