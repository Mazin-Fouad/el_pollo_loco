class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  backgroundObjects = [
    new BackgroundObject('../img/5_background/layers/air.png', -719),
    new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', -719),

    new BackgroundObject('../img/5_background/layers/air.png', 0),
    new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0),
    new BackgroundObject('../img/5_background/layers/air.png', 719),
    new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719),

    new BackgroundObject('../img/5_background/layers/air.png', 719 * 2),
    new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 719 * 2),
    new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 719 * 2),
    new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 719 * 2),
    new BackgroundObject('../img/5_background/layers/air.png', 719 * 3),
    new BackgroundObject('../img/5_background/layers/3_third_layer/2.png', 719 * 3),
    new BackgroundObject('../img/5_background/layers/2_second_layer/2.png', 719 * 3),
    new BackgroundObject('../img/5_background/layers/1_first_layer/2.png', 719 * 3),
  ];
  clouds = [new Cloud()];
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.clouds);

    this.ctx.translate(-this.camera_x, 0);
    // draw(); wird immer wieder aufgerufen
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((object) => {
      this.addToMap(object);
    });
  }

  addToMap(movable) {
    if (movable.otherDirection) {
      this.ctx.save();
      this.ctx.translate(movable.width, 0);
      this.ctx.scale(-1, 1);
      movable.x = movable.x * -1;
    }
    this.ctx.drawImage(movable.img, movable.x, movable.y, movable.width, movable.height);
    if (movable.otherDirection) {
      movable.x = movable.x * -1;
      this.ctx.restore();
    }
  }
}
