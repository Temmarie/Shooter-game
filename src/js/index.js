import Phaser from '../js/phaser.min';
import SceneMain from '../js/sceneMain';
import SceneMainMenu from '../js/sceneMainMenu'
import SceneGameOver from '../js/sceneGameOver';


 const config = {
    type: Phaser.WebGL,
    width: 480,
    height: 640,
    backgroundColor: "black",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { x: 0, y: 0 }
      }
    },

    parent: 'phaser-game',
    scene: [
      SceneMainMenu,
      SceneMain,
      SceneGameOver
    ],
    pixelArt: true,
    roundPixels: true
  };
  var game = new Phaser.Game(config);
