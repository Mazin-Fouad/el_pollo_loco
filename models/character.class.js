class Character extends MovableObject {
  y = 140;
  height = 295;
  width = 110;
  constructor() {
    super().loadImage('../img/2_character_pepe/2_walk/W-21.png');
  }

  jump() {}
}
