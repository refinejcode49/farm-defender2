class Monster {
  constructor(gameScreen, direction) {
    this.direction = direction;
    this.width = 125;
    this.height = 180;
    if (this.direction === "vertical") {
      this.possibleXPositions = [140, 950, 600, 250, 300, 500, 750, 450];
      this.randomXIndex = Math.floor(
        Math.random() * this.possibleXPositions.length
      );
      this.left = this.possibleXPositions[this.randomXIndex];
      this.top = 130;
    } else if (this.direction === "horizontal") {
      this.possibleYPositions = [140, 200, 350, 500, 600, 700, 250, 750];
      this.randomYIndex = Math.floor(
        Math.random() * this.possibleYPositions.length
      );
      this.top = this.possibleYPositions[this.randomYIndex];
      this.left = 130; // the msonter start to spawn at the beginning of the #game-container
    }
    this.element = document.createElement("img");
    this.element.src = "./Special_Red_Slime.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    gameScreen.appendChild(this.element);
  }

  move() {
    if (this.direction === "horizontal") {
      this.left += 4;
    } else {
      this.top += 4;
    }
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
