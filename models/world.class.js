class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  backgroundObjects = [
    new BackgroundObject('../img/5_background/layers/air.png', 0),
    new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0),
  ];
  clouds = [new Cloud()];
  canvas;
  ctx;
  keyboard;

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

    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.clouds);

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
    this.ctx.drawImage(movable.img, movable.x, movable.y, movable.width, movable.height);
  }
}
