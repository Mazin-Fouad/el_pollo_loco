class Cloud extends MovableObject {
  y = 30;
  width = 520;
  height = 300;
  IMAGES_CLOUDS = ['../img/5_background/layers/4_clouds/1.png', '../img/5_background/layers/4_clouds/2.png'];

  constructor() {
    super().loadImage('../img/5_background/layers/4_clouds/1.png');
    this.loadImages(this.IMAGES_CLOUDS);
    this.x = 100 + Math.random() * 2400;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
  }
}
