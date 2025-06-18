class Game {
  constructor() {
    this.startScreen = document.getElementById("game-start-screen");
    this.gameLevelOneScreen = document.getElementById("game-container"); // starting the game (level x) screen
    this.gameLevelUpScreen = document.getElementById("game-level-up-screen"); // winning the level screen and moving to the next level screen
    this.gameOverScreen = document.getElementById("game-end");
    //create a new player with the constructor parameter !!! change the height and width of the player here
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
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameOver = false;
    this.gameIntervalId = null;
    this.gameLoopFrequency = Math.round(1000 / 60); // 60 fps = 60 times per second
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
    console.log("game loop");
    this.update();
    //check if the game is over
    if (this.gameOver) {
      clearInterval(this.gameIntervalId);
    }
  }
  update() {
    this.player.move();
  }
}
