class Level {
  enemies;
  backgroundObjects;
  clouds;
  coins;
  level_end_x = 2200;

  constructor(enemies, backgroundObjects, clouds, coins) {
    this.enemies = enemies;
    this.backgroundObjects = backgroundObjects;
    this.clouds = clouds;
    this.coins = coins;
  }
}
