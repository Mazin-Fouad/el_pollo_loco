class StatusbarHealth extends DrawableObject {
  IMAGES_HEALTH = [
    '../img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png', //0
    '../img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
    '../img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
    '../img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
    '../img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
    '../img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png', // 5
  ];

  percentageHealth = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.x = 50;
    this.y = -10;
    this.width = 250;
    this.height = 65;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentageHealth = percentage;
    let path = this.IMAGES_HEALTH[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentageHealth == 100) {
      return 5;
    } else if (this.percentageHealth > 80) {
      return 4;
    } else if (this.percentageHealth > 60) {
      return 3;
    } else if (this.percentageHealth > 40) {
      return 2;
    } else if (this.percentageHealth > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
