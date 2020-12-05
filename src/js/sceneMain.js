import Phaser from '../js/phaser.min';
import sprBg0 from '../assets/sprBg0.png';
import sprBg1 from '../assets/sprBg1.png';
import sprExplosion from '../assets/sprExplosion.png';
import sprEnemy0 from "../assets/sprEnemy0.png";
import sprEnemy1 from "../assets/sprEnemy1.png";
import sprEnemy2 from "../assets/sprEnemy2.png";
import sprLaserEnemy0 from "../assets/sprLaserEnemy0.png";
import sprLaserPlayer from "../assets/sprLaserPlayer.png";
import sprPlayer from '../assets/sprPlayer.png';
import sndExplode0 from '../assets/sndExplode0.wav';
import sndExplode1 from '../assets/sndExplode1.wav';
import sndLaser from '../assets/sndLaser.wav';

export default class SceneMain extends Phaser.Scene {
  constructor() {
      super({ key:'SceneMain'});
  }
  preload()
  {

    //load our images and sprites
        // this.load.image(imageKey, path);
    this.load.image(sprBg0, "../assets/sprBg0.png")
    this.load.image(sprBg1, "../assets/sprBg1.png");
    this.load.spritesheet(sprExplosion, "../assets/sprExplosion.png", {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.spritesheet(sprEnemy0, "../assets/sprEnemy0.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.image(sprEnemy1, "../assets/sprEnemy1.png");
    this.load.spritesheet(sprEnemy2, "../assets/sprEnemy2.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.image(sprLaserEnemy0, "../assets/sprLaserEnemy0.png");
    this.load.image(sprLaserPlayer, "../assets/sprLaserPlayer.png");
    this.load.spritesheet(sprPlayer, "../assets/sprPlayer.png", {
      frameWidth: 16,
      frameHeight: 16
    });

    //sounds

    this.load.audio(sndExplode0, "../assets/sndExplode0.wav");
    this.load.audio(sndExplode1, "../assets/sndExplode1.wav");
    this.load.audio(sndLaser, "../assets/sndLaser.wav");
  }
  create() {
  //define objects
  this.anims.create({
    key: "sprEnemy0",
    frames: this.anims.generateFrameNumbers("sprEnemy0"),
    frameRate: 20,
    repeat: -1
  });

  this.anims.create({
    key: "sprEnemy2",
    frames: this.anims.generateFrameNumbers("sprEnemy2"),
    frameRate: 20,
    repeat: -1
  });

  this.anims.create({
    key: "sprExplosion",
    frames: this.anims.generateFrameNumbers("sprExplosion"),
    frameRate: 20,
    repeat: 0
  });

  this.anims.create({
    key: "sprPlayer",
    frames: this.anims.generateFrameNumbers("sprPlayer"),
    frameRate: 20,
    repeat: -1
  });

  //sound array object

  this.sfx = {
    explosions: [
      this.sound.add("sndExplode0"),
      this.sound.add("sndExplode1")
    ],
    laser: this.sound.add("sndLaser")
  };

  }
  update() {
    //constant running loop
  }
}