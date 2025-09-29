//DOM Elements
const gameBoard = document.getElementById('gameBoard');
const statusText = document.getElementById('status-text');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const drawScore = document.getElementById('drawScore');

//Game State variable
let board = []; //2D array to represent game board
let currentPlayer = 'X' //Track current player (X-human O-computer)
let gameActive = true; //track if game is sill active
let scores = {
    playe: 0, 
    computer: 0,
    draws:0
} 