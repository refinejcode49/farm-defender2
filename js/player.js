class Player {
  constructor(
    gameLevelOneScreen,
    positionLeft,
    positionTop,
    playerWidth,
    playerHeight,
    playerImageSrc
  ) {
    this.gameLevelOneScreen = gameLevelOneScreen;
    this.positionLeft = positionLeft;
    this.positionTop = positionTop;
    this.width = playerWidth;
    this.height = playerHeight;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = playerImageSrc;
    this.element.style.position = "absolute";
    this.element.style.top = `${positionTop}px`;
    this.element.style.left = `${positionLeft}px`;
    this.element.style.width = `${playerWidth}px`;
    this.element.style.height = `${playerHeight}px`;
    //after creating the img element and setting the properties, adding the img to the page
    gameLevelOneScreen.appendChild(this.element);
  }

  move() {
    this.positionLeft += this.directionX;
    this.positionTop += this.directionY;
    this.updatePosition();
    console.log("inside the player move method");
  }
  updatePosition() {
    this.element.style.top = `${this.positionTop}px`;
    this.element.style.left = `${this.positionLeft}px`;
  }
  didCollide(obstacle) {}
}
