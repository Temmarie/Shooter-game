import Phaser from '../js/phaser.min';
import sprBtnPlay from "../assets/sprBtnPlay.png";
import sprBtnPlayHover from "../assets/sprBtnPlayHover.png";
import sprBtnPlayDown from "../assets/sprBtnPlayDown.png";
import sprBtnRestart from "../assets/sprBtnRestart.png";
import sprBtnRestartHover from "../assets/sprBtnRestartHover.png";
import sprBtnRestartDown from "../assets/sprBtnRestartDown.png";


export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
      super({key: 'SceneMainMenu' });
  }
  preload()
  {
    //load our images and sounds
    this.load.image(sprBtnPlay, "../assets/sprBtnPlay.png");
    this.load.image(sprBtnPlayHover, "../assets/sprBtnPlayHover.png");
    this.load.image(sprBtnPlayDown, "../assets/sprBtnPlayDown.png");
    this.load.image(sprBtnRestart, "../assets/sprBtnRestart.png");
    this.load.image(sprBtnRestartHover, "../assets/sprBtnRestartHover.png");
    this.load.image(sprBtnRestartDown, "../assets/sprBtnRestartDown.png");

    this.load.audio("sndBtnOver", "../assets/sndBtnOver.wav");
    this.load.audio("sndBtnDown", "../assets/sndBtnDown.wav");
  }
  create() {
  //define objects 
  this.scene.start("SceneMain");
      
  }
  update() {
    //constant running loop
  }
}