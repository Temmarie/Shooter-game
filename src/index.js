import Phaser from './phaser.min';
import StartScene from './js/startScene';
import SceneMain from './js/sceneMain';
import GameOver from './js/gameOver';
import Score from './js/score';

const config = {
  type: Phaser.WEBGL,
  width: 670,
  height: 640,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [
    StartScene,
    SceneMain,
    GameOver,
    Score,
  ],
  pixelArt: true,
  roundPixels: true,
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
