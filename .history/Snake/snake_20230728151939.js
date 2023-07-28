const blockSize = 25;
const board = document.getElementById('board');
const context = board.getContext("2d");
const boardHeight = 500;
const boardWidth = 500;

let snake = {
    x: boardWidth / 2,
    y: boardHeight / 2,
    xv: 0,
    yv: 0,
    snakeBody: [],
    snakeTail: { tailX: 0, tailY: 0 }
}

// food
let food = {
    x: blockSize * 5,
    y: blockSize * 5,
}

// Game lives
let gameLives = 2;

// Score
let score = 0;

let highScore;

// Game Over
let gameOver = false;

window.onload = function () {
    board.height = boardHeight;
    board.width = boardWidth;
    
    highScore = parseInt(localStorage.getItem('highscore')) || 0;
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000 / 2);
}


function checkGameOver() {
    if (gameOver) {
        context.font = "40px"; // Set the font size before using context.fillText()
        context.fillText("game over : press space button to restart", 180, 50);
        return;
    }
}

function placeFood() {
    food.x = Math.floor(Math.random() * (boardWidth / blockSize)) * blockSize;
    food.y = Math.floor(Math.random() * (boardHeight / blockSize)) * blockSize;
}

function eatFood() {
    // to check if food is eaten by snake 
    if (snake.x === food.x && snake.y === food.y) {
        snake.snakeBody.pop();
        score += 5;
        placeFood();
    }
    
    // Removes food from frame
    for (let i = snake.snakeBody.length - 1; i > 0; i--) {
        snake.snakeBody[i] = snake.snakeBody[i - 1];
    }
    if (snake.snakeBody.length) {
        snake.snakeBody[0] = { x: snake.x, y: snake.y }
    }
}

function playerHighScore() {
    if (gameOver) {
        let previousHighScore = score;

        if (previousHighScore > highScore) {
            localStorage.setItem('highscore', previousHighScore); // Update the high score in localStorage only if the current score is higher
        }
    }
}

function liveLeft() {
    if (gameOver) {
        if (gameLives > 0) {
            gameLives--;

            snake.snakeBody = [];

            snake.x = boardWidth / 2;
            snake.y = boardHeight / 2;

            snake.xv = 0;
            snake.yv = 0;

            gameOver = false;
            placeFood();
        }
    }
    if (gameLives === 0) {
        checkGameOver();
    }
}

function drawSnake() {
    context.fillStyle = 'lightblue';
    context.drawImage(snake.x, snake.y, blockSize, blockSize);

    for (let i = 0; i < snake.snakeBody.length; i++) {
        context.drawImage(snake.snakeBody[i].x, snake.snakeBody[i].y, blockSize, blockSize);
    }
    
    // Before updating the head position, store the current head position
    let prevHeadX = snake.x;
    let prevHeadY = snake.y;
    
    // Update the snaketail position to the previous head position
    snake.snakeTail.tailX = prevHeadX;
    snake.snakeTail.tailY = prevHeadY;

}

function checkAlive() {
    if (snake.x < 0) {
        gameOver = true;
        snake.x = 0;
    } else if (snake.x > boardWidth) {
        gameOver = true;
        snake.x = boardWidth - blockSize;
    }

    // Check for collision with top and bottom walls
    if (snake.y < 0) {  // Check for collision with top 
        gameOver = true;
        snake.yv = 0;
        snake.y = 0; // Keep the snake at the top edge of the board
    } else if (snake.y + blockSize > boardHeight) {  // Check for collision with bottom walls
        gameOver = true;
        snake.yv = 0;
        snake.y = boardHeight - blockSize; // Keep the snake at the bottom edge of the board
    }

    for (let i = 0; i < snake.snakeBody.length; i++) {
        if (snake.x === snake.snakeBody[i].x && snake.y === snake.snakeBody[i].y) {
            gameOver = true;
        }
    }
}

function update() {
    // Styling the canvas
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);

    // styling the food
    context.fillStyle = 'red';
    context.drawImage(food.x, food.y, blockSize + 10, blockSize + 10);

    eatFood();

    if (!gameOver) {
        snake.x += snake.xv * blockSize;
        snake.y += snake.yv * blockSize;
    }

    // show the score 
    context.font = '20px';
    context.fillStyle = 'white';
    context.fillText(score, 80, 20);

    // show lives left
    context.font = '20px';
    context.fillStyle = 'white';
    context.fillText(gameLives, 50, 20);

    // show player's high score 
    context.font = '20px';
    context.fillStyle = 'white';
    context.fillText(highScore, 110, 20);
    
    drawSnake();
    placeTail();
    checkAlive();
    liveLeft();
    playerHighScore();
}

function placeTail() {
    // Update the tail position based on the previous direction
    snake.snakeTail.tailX = snake.x;
    snake.snakeTail.tailY = snake.y;

    if (pressUp) {
        snake.snakeTail.tailX = snake.x;
        snake.snakeTail.tailY = snake.y;
    } else if (pressDown) {
        snake.snakeTail.tailX = snake.x;
        snake.snakeTail.tailY = snake.y;
    } else if (pressRight) {
        snake.snakeTail.tailX = snake.x;
        snake.snakeTail.tailY = snake.y;
    } else if (pressLeft) {
        snake.snakeTail.tailX = snake.x;
        snake.snakeTail.tailY = snake.y;
    } 
    
    context.fillStyle = 'lightblue';
    context.drawImage(snakeTail, snake.snakeTail.tailX, snake.snakeTail.tailY + blockSize, blockSize, blockSize);
}

function changeDirection(event) {
    if (gameOver) {
        if (event.code == 'Space') {
            resetGame();
        } else if (event.code == 'Enter') {
            resetGame();
        }
    }
    // placeTail()
    
    if (event.code == "ArrowUp" && snake.yv !== 1) {
        snake.xv = 0;
        snake.yv = -1;
    } else if (event.code == "ArrowDown" && snake.yv !== -1) {
        snake.xv = 0;
        snake.yv = 1;
    } else if (event.code == "ArrowRight" && snake.xv !== -1) {
        snake.xv = 1;
        snake.yv = 0;
    } else if (event.code == "ArrowLeft" && snake.xv !== 1) {
        snake.xv = -1;
        snake.yv = 0;
    }
}

function resetGame() {
    snake.x = boardWidth / 2;
    snake.y = boardHeight / 2;

    snake.xv = 0;
    snake.yv = 0;
    score = 0;

    highScore = parseInt(localStorage.getItem('highscore')) || 0;

    gameLives = 2;
    gameOver = false;
    snake.snakeBody = [];
    placeFood();
}

// Call the imageLoaded function for the first time to start loading images
imageLoaded();
