class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start-screen"); // game intro
    this.gameScreen = document.getElementById("game-screen"); // the game screen
    this.statsScreen = document.getElementById("game-stats"); // the game stats screen (level x) screen
    this.gameWinScreen = document.getElementById("game-win"); // winning the level screen and moving to the next level screen
    this.gameOverScreen = document.getElementById("game-end"); // game over screen
    //create a new player with the constructor parameter !!! change the height and width of the player here
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.timerElement = document.getElementById("timer");
    this.player = new Player(
      this.gameScreen,
      40,
      400,
      125,
      150,
      "../assets/cute_venom.png"
    );
    this.height = 600;
    this.width = 500;
    this.currentLevel = 1;
    this.monster = [new Monster(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.timer = 20;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60 fps = 60 times per second
    this.counter = 0;
    this.playerInterval;
  }

  //to start the game, set the height and width of the game screen and start the game loop
  start() {
    // set the height and width of the game screen in pixels
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;
    //hide the start screen and show the game screen
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.statsScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
    this.playerInterval = setInterval(() => {
      this.timer--;
      this.timerElement.innerText = this.timer;
      if (this.timer === 0) {
        clearInterval(this.playerInterval);
        //console.log("victory !");
        this.victoryEndGame();
      }
    }, 1000);
  }
  gameLoop() {
    //console.log("game loop");
    this.counter++;
    if (this.counter % 180 === 0) {
      this.monster.push(new Monster(this.gameScreen));
    }
    this.update();
    //check if the game is over
    if (this.gameIsOver) {
      this.gameOver();
    }
  }
  update() {
    this.player.move();
    for (let i = 0; i < this.monster.length; i++) {
      const currentMonster = this.monster[i];
      currentMonster.move();
      //check if the monster is colliding with the player
      if (this.player.didCollide(currentMonster)) {
        this.monster.splice(i, 1);
        i--;
        // remove the img element from the html
        currentMonster.element.remove();
        this.lives--;
        this.livesElement.innerText = this.lives;
        //check to see if the lives equals to zero
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }
      //check if the monster passes the player
      if (currentMonster.top > 620) {
        //add a point
        this.score++;
        this.scoreElement.innerText = this.score;
        // cut the monster out of array
        this.monster.splice(i, 1);
        i--;
        // remove the img element from the html
        currentMonster.element.remove();
      }
    }
  }

  level1() {
    
  }

  victoryEndGame() {
    clearInterval(this.gameIntervalId);
    //cache le game screen
    this.gameScreen.style.display = "none";
    // montre le victory screen
    this.gameWinScreen.style.display = "block";
    //for the audio win
    //this.victory.play();
    //pour les highscores
    //const scoreInStorage = JSON.parse(localStorage.getItem("highscores"));
    //if (scoreInStorage) {
    //scoreInStorage.push(this.score);
    //const topFourScores = scoreInStorage.sort((a, b) => b - a).slice(0, 4);
    //localStorage.setItem("highscores", JSON.stringify(topFourScores));
    //} else {
    //localStorage.setItem("highscores", JSON.stringify([this.score]));
    //}
    //const updatedScoresInStorage = JSON.parse(localStorage.getItem("highscores"));

    //updatedScoresInStorage.forEach((oneScore) => {
    //const ourLiElement = document.createElement("li");
    //ourLiElement.innerText = oneScore;
    //this.highScoreElement.appendChild(ourLiElement);
    //});
  }

  gameOver() {
    //stop the loop from running
    clearInterval(this.gameIntervalId);
    // hide the gameScreen
    this.gameScreen.style.display = "none";
    /// show the game Over screen
    this.gameOverScreen.style.display = "block";
  }
}
