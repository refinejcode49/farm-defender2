class Monster {
  constructor(gameScreen, left, top, directionX) {
    this.possibleXPositions = [700, 450, 111, 622, 27, 44];
    this.possibleYPositions = [-100, -110, -120];
    this.randomXIndex = Math.floor(
      Math.random() * this.possibleXPositions.length
    );
    this.randomYIndex = Math.floor(
      Math.random() * this.possibleYPositions.length
    );
    this.left = this.possibleXPositions[this.randomXIndex];
    this.top = this.possibleYPositions[this.randomYIndex];
    this.directionX = directionX;
    this.width = 125;
    this.height = 180;
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
    if (this.directionX === "horizontal") {
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
