window.onload = function () {
  const startButtonElement = document.getElementById("start-button");
  const restartButtonElement = document.getElementById("restart-button");
  const nextLevelButtonElement = document.getElementById("next-lvl-btn");
  let myNewGame;

  // all the event listeners here
  startButtonElement.addEventListener("click", () => {
    //make a new instance of the game
    myNewGame = new Game();
    startGame();
  });

  restartButtonElement.addEventListener("click", () => {
    //refresh the page to start again
    window.location.reload();
    //hide the game over screen
    //myNewGame.gameOverScreen.style.display = "none";
    //remove the image of the player from the first game
    //myNewGame.player.element.remove();
    //show the game screen
    //myNewGame.gameScreen.style.display = "block";
    // this reassign the myNewGame variable
    //myNewGame = new Game();
    //myNewGame.start();
  });

  // start the next level when the player win
  nextLevelButtonElement.addEventListener("click", () => {
    //hide the win screen
    myNewGame.gameWinScreen.style.display = "none";
    // next level increase
    myNewGame.currentLevel++;

    //set different values for lives and timer for level 2/3
    if (myNewGame.currentLevel === 2) {
      myNewGame.lives = 3;
      myNewGame.timer = 10;
    } else if (myNewGame.currentLevel === 3) {
      myNewGame.lives = 4;
      myNewGame.timer = 20;
    }

    // reset score, lives and timer
    myNewGame.score = 0;
    myNewGame.scoreElement.innerText = myNewGame.score;
    myNewGame.livesElement.innerText = myNewGame.lives;
    myNewGame.timerElement.innerText = myNewGame.timer;
    //show game screen
    myNewGame.gameScreen.style.display = "block";
    myNewGame.start();
  });

  // keyboard event listeners
  window.addEventListener("keydown", (event) => {
    //if the key up is pressed, the direction Y is moving up, down, left and right
    if (event.code === "ArrowUp") {
      myNewGame.player.directionY = -4;
    } else if (event.code === "ArrowDown") {
      myNewGame.player.directionY = 4;
    } else if (event.code === "ArrowLeft") {
      myNewGame.player.directionX = -4;
    } else if (event.code === "ArrowRight") {
      myNewGame.player.directionX = 4;
    }
  });

  window.addEventListener("keyup", (event) => {
    //if the key up is !pressed, the direction Y stop moving up, down, left and right
    if (event.code === "ArrowUp") {
      myNewGame.player.directionY = 0;
    } else if (event.code === "ArrowDown") {
      myNewGame.player.directionY = 0;
    } else if (event.code === "ArrowLeft") {
      myNewGame.player.directionX = 0;
    } else if (event.code === "ArrowRight") {
      myNewGame.player.directionX = 0;
    }
  });

  //all the functions here
  function startGame() {
    //console.log("start game");
    myNewGame.start();
  }
};
