class StatusbarCoin extends DrawableObject {
  IMAGES_COINS = [
    '../img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
    '../img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
    '../img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
    '../img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
    '../img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
    '../img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
  ];

  percentageCoins = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES_COINS);
    this.x = 50;
    this.y = 40;
    this.width = 250;
    this.height = 65;
    this.setPercentage(0);
  }

  setPercentage(percentage) {
    this.percentageHealth = percentage;
    let path = this.IMAGES_COINS[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentageHealth == 0) {
      return 0;
    } else if (this.percentageHealth > 20) {
      return 1;
    } else if (this.percentageHealth > 40) {
      return 2;
    } else if (this.percentageHealth > 60) {
      return 3;
    } else if (this.percentageHealth > 80) {
      return 4;
    } else {
      return 5;
    }
  }
}
