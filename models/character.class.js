class Character extends MovableObject {
  y = 20;
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
  IMAGES_JUMPING = [
    '../img/2_character_pepe/3_jump/J-31.png',
    '../img/2_character_pepe/3_jump/J-32.png',
    '../img/2_character_pepe/3_jump/J-33.png',
    '../img/2_character_pepe/3_jump/J-34.png',
    '../img/2_character_pepe/3_jump/J-35.png',
    '../img/2_character_pepe/3_jump/J-36.png',
    '../img/2_character_pepe/3_jump/J-37.png',
    '../img/2_character_pepe/3_jump/J-38.png',
    '../img/2_character_pepe/3_jump/J-39.png',
  ];
  world;
  WALKING_SOUND = new Audio('../audio/character-walking.mp3');

  constructor() {
    super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.animate();
    this.applyGravity();
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

      if (this.world.keyboard.SPACE) {
        this.speedY = 20;
      }

      this.world.camera_x = -this.x + 90;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isAboveGround()) {
        //Play Jump animation
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          //play walk animation
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 50);
  }

  jump() {}
}
