import Phaser from '../src/phaser.min';
import SceneMain from '../src/js/sceneMain';



 const config = {
    type: Phaser.WebGL,
    width: 640,
    height: 640,
    parent: 'phaser-game',
    scene: [
      SceneMain]
  };
  var game = new Phaser.Game(config);
