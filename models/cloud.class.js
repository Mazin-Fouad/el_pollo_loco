class Cloud extends MovableObject {
  y = 30;
  width = 520;
  height = 240;
  constructor() {
    super().loadImage('../img/5_background/layers/4_clouds/1.png');
    this.x = 200 + Math.random() * 500;
  }
}
