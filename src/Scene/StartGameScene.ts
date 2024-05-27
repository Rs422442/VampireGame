import * as PIXI from 'pixi.js';
import MainScene from './MainScene';
import AssetManager from '../AssetManager';

export default class StartGame extends PIXI.Container{
    pixiApp:PIXI.Application;
    MainScene = new MainScene;
    buttonImage: PIXI.Texture;
    

    constructor(_pixiApp:PIXI.Application, Gameloading: AssetManager){
        super();
        this.pixiApp = _pixiApp; 
        this.buttonImage = Gameloading.getTexture("atlas", "block1")
        const StartButton = PIXI.Sprite.from(this.buttonImage );
        StartButton.anchor.set(0.5);
        StartButton.interactive = true;
        StartButton.x = window.innerWidth/2;
        StartButton.y = window.innerHeight/2;
        StartButton.rotation = 0;
        StartButton.scale.set(1);
        this.pixiApp.stage.addChild(StartButton);
    }
}