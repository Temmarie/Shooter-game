/* eslint-disable max-classes-per-file */
import { Entity } from '../content/entity';

class Player extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprPlayer');
    this.setScale(2);
  }
}

class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprLaserPlayer');
  }
}

export { Player, PlayerLaser };