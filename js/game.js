class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start-screen");
    this.gameLevelOneScreen = document.getElementById("game-screen-lvl-1"); // starting the game (level x) screen
    this.gameLevelUpScreen = document.getElementById("game-level-up-screen"); // winning the level screen and moving to the next level screen
    this.gameOverScreen = document.getElementById("game-end");
    //create a new player with the constructor parameter !!! change the height and width of the player here
    this.scoreElement = document.getElementById("score");
    this.livesElement = document.getElementById("lives");
    this.player = new Player(
      this.gameLevelOneScreen,
      40,
      400,
      125,
      150,
      "../assets/cute_venom.png"
    );
    this.height = 600;
    this.width = 500;
    this.monster = [new Monster(this.gameLevelOneScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60 fps = 60 times per second
    this.counter = 0;
  }

  //to start the game, set the height and width of the game screen and start the game loop
  start() {
    // set the height and width of the game screen in pixels
    this.gameLevelOneScreen.style.height = `${this.height}px`;
    this.gameLevelOneScreen.style.width = `${this.width}px`;
    //hide the start screen and show the game screen
    this.startScreen.style.display = "none";
    this.gameLevelOneScreen.style.display = "block";
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    //console.log("game loop");
    this.counter++;
    if (this.counter % 180 === 0) {
      this.monster.push(new Monster(this.gameLevelOneScreen));
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

  gameOver() {
    //stop the loop from running
    clearInterval(this.gameIntervalId);
    // hide the gameScreen
    this.gameLevelOneScreen.style.display = "none";
    /// show the game Over screen
    this.gameOverScreen.style.display = "block";
  }
}
