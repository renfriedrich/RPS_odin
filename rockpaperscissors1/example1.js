
   
  function computerPlay() {
    let computerchoice = ["Rock", "Paper", "Scissors"];
    return computerchoice[Math.floor(Math.random() * computerchoice.length)];

  }

 
  function playRound(playerchoicelns, computerSelection) {
if (playerchoicelns == 'rock' && computerSelection == 'Paper') {
    return "You lost son";
} else if (playerchoicelns == 'rock' && computerSelection == 'Scissors'){
  return"You won son";
} else if (playerchoicelns == 'paper' && computerSelection == 'Rock'){
  return"You won son";
} else if (playerchoicelns == 'paper' && computerSelection == 'Scissors'){
  return"You lost son"
} else if (playerchoicelns == 'scissors' && computerSelection == 'Rock'){ 
  return "You lost son"
} else if (playerchoicelns == 'scissors' && computerSelection == 'Paper'){
  return "You won son";
} else {
  return "It's a tie, try again you silly goose";
}}


function game() {
  for (let i = 0; i < 5; i++) {
    let playerchoice = prompt("Please choose Rock, Paper, or Scissors");
    playerchoicel = playerchoice.toLowerCase();
    playerchoicelns = playerchoicel.replace(/\s/g, "");
    const computerSelection = computerPlay();
    console.log(playRound(playerchoicelns, computerSelection));
  }
}

game()