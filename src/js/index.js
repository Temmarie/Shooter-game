import Phaser from '../js/phaser.min';
import SceneMain from '../js/sceneMain';
import StartScene from '../js/startScene';


 const config = {
    type: Phaser.WebGL,
    width: 640,
    height: 640,
    parent: 'phaser-game',
    scene: [
      StartScene,
      SceneMain]
  };
  var game = new Phaser.Game(config);
