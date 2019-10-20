import Phaser from "phaser";

// Importing scenes
import MainMenu from './scenes/MainMenu.js';
import Gameplay from './scenes/Gameplay.js';

class Launcher extends Phaser.Game {

  constructor(){

    super({
      type: Phaser.AUTO,
      scale:{
        parent: 'game-container',
        width: 1280,
        height: 640,
      },
      title: 'Debright Space Programm'
    })


    this.scene.add("MainMenu", new MainMenu(), false);
    this.scene.add("Gameplay", new Gameplay(), true);
  }

}

// This is the game entry point
new Launcher();
