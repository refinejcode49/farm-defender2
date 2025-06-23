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
    // not letting the player go left or right off the screen
    if (this.positionLeft < 40) {
      this.positionLeft = 40;
    }
    if (this.positionRight + this.width > 470) {
      this.positionLeft = 470 - this.width;
    }
    // not letting the player go up or down off the screen
    if (this.positionTop < 0) {
      this.positionLeft = 0;
    }
    if (this.positionTop + this.height > 600) {
      this.positionTop = 600 - this.height;
    }
    this.updatePosition();
    //console.log("inside the player move method");
  }
  updatePosition() {
    this.element.style.top = `${this.positionTop}px`;
    this.element.style.left = `${this.positionLeft}px`;
  }

  didCollide(monster) {
    const playerRect = this.element.getBoundingClientRect();
    const monsterRect = monster.element.getBoundingClientRect();

    if (
      playerRect.left < monsterRect.right &&
      playerRect.right > monsterRect.left &&
      playerRect.top < monsterRect.bottom &&
      playerRect.bottom > monsterRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}
