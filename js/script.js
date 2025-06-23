window.onload = function () {
  const startButtonElement = document.getElementById("start-button");
  const restartButtonElement = document.getElementById("restart-button");
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
    //myNewGame.gameLevelOneScreen.style.display = "block";
    // this reassign the myNewGame variable
    //myNewGame = new Game();
    //myNewGame.start();
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
