class Monster {
  constructor(gameScreen, direction) {
    this.direction = direction;
    this.width = 125;
    this.height = 180;
    if (this.direction === "vertical") {
      this.possibleXPositions = [600, 750, 450, 111, 27, 44];
      this.randomXIndex = Math.floor(
        Math.random() * this.possibleXPositions.length
      );
      this.left = this.possibleXPositions[this.randomXIndex];
      this.top = 130;
    } else if (this.direction === "horizontal") {
      this.possibleYPositions = [130, 150, 250, 350, 450, 600];
      this.randomYIndex = Math.floor(
        Math.random() * this.possibleYPositions.length
      );
      this.top = this.possibleYPositions[this.randomYIndex];
      this.left = -100;
    }
    this.element = document.createElement("img");
    this.element.src = "../assets/SDV_Sandy.png";
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
