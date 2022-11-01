class YellowChicken extends MovableObject {
  y = 350;
  height = 80;
  width = 70;
  IMAGES_WALKING = ['../img/3_enemies_chicken/chicken_small/1_walk/1_w.png', '../img/3_enemies_chicken/chicken_small/1_walk/2_w.png', '../img/3_enemies_chicken/chicken_small/1_walk/3_w.png'];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.x = 300 + Math.random() * 2400;
    this.speed = 0.15 + Math.random() * 0.15;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }
}
