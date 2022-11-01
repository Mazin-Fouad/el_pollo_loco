class Coin extends MovableObject {
  y = 330;
  height = 150;
  width = 150;
  IMAGES_WALKING = ['../img/8_coin/coin_1.png', '../img/8_coin/coin_2.png'];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 2000;
    this.y = 100 + Math.random() * 270;
  }
}
