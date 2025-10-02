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
    draws: 0
}

function initializeGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    currentPlayer = 'X' //human always start
    gameActive = true;
    statusText.textContent = 'Your Turn';

    createBoard();
}

/**
 * create the visual game board
 */
function createBoard() {
    gameBoard.innerHTML = '';

    //create 3x3 grid 9 cells
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) { 
            const cell = document.createElement('button');
            cell.classList.add('cell');
            cell.dataset.row = row;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initializeGame();
})