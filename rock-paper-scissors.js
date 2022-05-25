const prompt = require('prompt-sync')();
let player1= prompt("Player 1, enter 'rock', 'paper', or 'scissors'.")
let player2= prompt("Player 2, enter 'rock', 'paper', or 'scissors'.")

if (player1 === player2){
    console.log("Tie!")
}

if (player1 === 'rock' && player2 === 'scissors'){ 
    console.log("Player 1 wins!")
} 
if (player1 === 'scissors' && player2 === 'paper'){
    console.log("Player 1 wins!")
} 
if (player1 === "paper" && player2 === "rock"){
    console.log("Player 1 wins!")
} 
if (player1 === "rock" && player2 === "paper"){
    console.log("Player 2 wins!")
} 
if (player1 === "scissors" && player2 === 'rock'){
    console.log("Player 2 wins!")
} 
if (player1 === 'paper' && player2 === 'scissors'){
    console.log("Player 2 wins!")
}


