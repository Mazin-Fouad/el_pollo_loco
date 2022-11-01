class Coin extends MovableObject {
  y = 330;
  height = 150;
  width = 150;
  IMAGES_COINS = ['../img/8_coin/coin_1.png', '../img/8_coin/coin_2.png'];

  constructor() {
    super().loadImage(this.IMAGES_COINS[0]);
    this.loadImages(this.IMAGES_COINS);
    this.x = 150 + Math.random() * 2100;
    this.y = 100 + Math.random() * 240;
  }
}
