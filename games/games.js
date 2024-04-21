//birdEscape js

let bird = document.getElementById('bird');
let gameContainer = document.getElementById('game-container');
let amountOfSquares = 0;

function createObstacle() {
  let obstacle = document.createElement('div');
  obstacle.className = 'obstacle';
  obstacle.style.top = Math.floor(Math.random() * (640)) + 'px';  // Set obstacle's top position randomly
  if(gameContainer.childElementCount<20){ // Add obstacle to game container if total obstacles < 20
    gameContainer.appendChild(obstacle);
  }
}

function checkCollision() {
  let obstacles = document.getElementsByClassName('obstacle');

  for (let i = 0; i < obstacles.length; i++) {  // Check if bird collides with any obstacle
    let obstacle = obstacles[i];
    if (bird.getBoundingClientRect().right > obstacle.getBoundingClientRect().left &&
      bird.getBoundingClientRect().left < obstacle.getBoundingClientRect().right &&
      bird.getBoundingClientRect().bottom > obstacle.getBoundingClientRect().top &&
      bird.getBoundingClientRect().top < obstacle.getBoundingClientRect().bottom) {
      return true;
    }else{
      return false;
    }
  }
}

function moveBird(event) {
  let rect = gameContainer.getBoundingClientRect(); // Calculate bird's position based on mouse position
  let mouseX = event.clientX - rect.left - 30; 
  let mouseY = event.clientY - rect.top - 20;

  bird.style.left = mouseX + 'px';
  bird.style.top = mouseY + 'px';
}

window.onload = function () {
  setInterval(createObstacle, 2000);  // Create obstacles every 2 seconds
  document.getElementById('game-container').addEventListener('mousemove', moveBird);  // Move bird based on mouse movement
  let gameInterval = setInterval(function () {
    if (checkCollision()) {
      clearInterval(gameInterval);
      alert('Game over!'); // Game over alert and reload
      location.reload();
    }
  }, 10);
};

// catchOlof js
let object = document.getElementById('object'); // Update countdown display
let countdownElement = document.getElementById('countdown');
let lives = 3;
let countdown;
let countdownInterval;
let points = 0;
let everyHeart = [
  document.getElementById('heart1'),
  document.getElementById('heart2'),
  document.getElementById('heart3')
]

function resetCountdown() {
  countdown = 3;
  countdownElement.textContent = countdown;
}

function updateCountdown() {
  countdown--;
  countdownElement.textContent = countdown;
  if (countdown === 0) {
    clearInterval(countdownInterval);
    loseLife();
    resetCountdown();
    moveObject();
    countdownInterval = setInterval(updateCountdown, 1000);
  }
}

function playSound(){
  let sound = document.getElementById('clickSound');
  sound.play();
}

function updatePoints() {
  let pointsDisplay = document.getElementById('points');
  points++;
  if (lives == 0) {
    points = 0;
    pointsDisplay.innerText = points;
  } else {
    pointsDisplay.innerText = points;
  }
  playSound();
}

function loseLife() {
  lives--; 
  if (lives == 0) {
    clearInterval(countdownInterval);
    alert('Game Over! You lost all lives.'); // Game over alert
  } else {
    alert(`Lost a life! ${lives} lives remaining.`);// Alert about losing a life
  }

  for (var i = 2; lives <= i; i--) {
    everyHeart[i].src = '../material/emptyHeart2.png'; // Update heart images to empty if lives are lost
  }

  if (lives == 0) {
    lives=3;
    everyHeart[0].src = '../material/blueHeart.png'; // Reset heart images to full when all lives are lost
    everyHeart[1].src = '../material/blueHeart.png';
    everyHeart[2].src = '../material/blueHeart.png';
    points=0;
  }
}

function moveObject() {
  const randomX = Math.floor(Math.random() * (800 - 120));
  const randomY = Math.floor(Math.random() * (600 - 120));

  object.style.left = randomX + 'px';
  object.style.top = randomY + 'px';
}

object.addEventListener('click', () => {
  clearInterval(countdownInterval);
  resetCountdown();
  updateCountdown();
  moveObject();
  countdownInterval = setInterval(updateCountdown, 1000);
});

