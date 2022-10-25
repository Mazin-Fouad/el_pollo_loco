class World {
  character = new Character();
  level = level1;
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

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.clouds);

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
