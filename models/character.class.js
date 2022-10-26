class Character extends MovableObject {
  y = 170;
  height = 255;
  width = 110;
  speed = 10;
  IMAGES_WALKING = [
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png',
  ];
  world;
  WALKING_SOUND = new Audio('../audio/character-walking.mp3');

  constructor() {
    super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.WALKING_SOUND.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        this.WALKING_SOUND.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed;
        this.otherDirection = true;
        this.WALKING_SOUND.play();
      }
      this.world.camera_x = -this.x + 90;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //Walk animation
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 50);
  }

  jump() {}
}
