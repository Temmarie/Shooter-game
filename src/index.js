import Phaser from '../src/phaser.min';
import StartScene from '../src/js/startScene';
import SceneMain from '../src/js/sceneMain';
import GameOver from '../src/js/gameOver';
import Score from '../src/js/score';


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


