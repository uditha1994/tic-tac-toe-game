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
            cell.dataset.row = row; //store row position
            cell.dataset.col = col; //store column position

            cell.addEventListener('click', () =>
                handleCellClick(row, col, cell));

            gameBoard.appendChild(cell);
        }
    }
}

function handleCellClick(row, col, cell) {
    if (board[row][col] !== '' || !gameActive || currentPlayer !== 'X') {
        return;
    }

    makeMove(row, col, cell, 'X');

    //switch to computer turn
    currentPlayer = 'O';
    statusText.textContent = 'Computer thinking...';

    setTimeout(() => {
        if (gameActive) {
            computerMove();
        }
    }, 1000);
}

function makeMove(row, col, cellElement, player) {
    board[row][col] = player; //update board array
    cellElement.textContent = player; //add visual display
    cellElement.classList.add(player.toLowerCase());
    cellElement.classList.add('animate');
    cellElement.disabled = true;
}

function computerMove() {
    if (!gameActive) {
        return;
    }

    /**
     * 1- try to win
     * 2. try to block player winning
     * 3. take center if available
     * 4. take random available post
     */

    let move = getCenterMove();

    if(move){
        const cellElement = document.querySelector
        (`[data-row="${move.row}"][data-col="${move.col}"]`);
        makeMove(move.row, move.col, cellElement, 'O');

        currentPlayer = 'X';
        statusText.textContent = 'Your turn';
    }
}

function findWinningMove() { }

//to take the center position
function getCenterMove() {
    if (board[1][1] === '') {
        return { row: 1, col: 1 };
    }

    return null;
}

function getRandomMove() {
    const availableMoves = [];
 }


document.addEventListener('DOMContentLoaded', function () {
    initializeGame();
})