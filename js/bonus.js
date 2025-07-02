class Bonus {
  constructor(gameScreen) {
    this.possibleImages = [
      "./assets/SDV_Cauliflower.png",
      "./assets/SDV_Sandy.png",
    ];
    this.possibleXPositions = [450, 270, 100, 50, 80, 44, 111, 700];
    this.randomIndex = Math.floor(
      Math.random() * this.possibleXPositions.length
    );
    this.left = this.possibleXPositions[this.randomIndex];
    this.top = Math.floor(Math.random() * (700 - 90));
    this.width = 90;
    this.height = 90;
    this.randomImageIndex = Math.floor(
      Math.random() * this.possibleImages.length
    );
    this.element = document.createElement("img");
    this.element.src = this.possibleImages[this.randomImageIndex];
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    gameScreen.appendChild(this.element);

    //pour faire disparaitre les goodObstacle après x secondes
    setTimeout(() => {
      this.element.remove();
    }, 3000);
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
