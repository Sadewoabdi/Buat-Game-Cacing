document.addEventListener('DOMContentLoaded', () => {
  const gameArea = document.querySelector('.game-area');
  const snake = document.querySelector('.snake');
  const food = document.querySelector('.food');
  let snakeX = 0;
  let snakeY = 0;
  let foodX = 0;
  let foodY = 0;

  // Initialize snake and food positions
  positionSnake();
  positionFood();

  // Move snake
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && snakeX < gameArea.clientWidth - 20) {
      snakeX += 20;
    } else if (e.key === 'ArrowLeft' && snakeX > 0) {
      snakeX -= 20;
    } else if (e.key === 'ArrowDown' && snakeY < gameArea.clientHeight - 20) {
      snakeY += 20;
    } else if (e.key === 'ArrowUp' && snakeY > 0) {
      snakeY -= 20;
    }

    updateSnakePosition();
    checkCollision();
  });

  // Update snake position
  function updateSnakePosition() {
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
  }

  // Position snake randomly
  function positionSnake() {
    snakeX = Math.floor(Math.random() * (gameArea.clientWidth / 20)) * 20;
    snakeY = Math.floor(Math.random() * (gameArea.clientHeight / 20)) * 20;
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
  }

  // Position food randomly
  function positionFood() {
    foodX = Math.floor(Math.random() * (gameArea.clientWidth / 20)) * 20;
    foodY = Math.floor(Math.random() * (gameArea.clientHeight / 20)) * 20;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
  }

  // Check collision with food
  function checkCollision() {
    if (snakeX === foodX && snakeY === foodY) {
      positionFood();
    }
  }
});
