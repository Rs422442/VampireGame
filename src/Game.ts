import * as PIXI from 'pixi.js';
import AssetManager from './AssetManager';
import { Ticker } from 'pixi.js';
import StartGame from './Scene/StartGameScene';




export default class Game{

    resources: any;
    pixiApp:PIXI.Application;
    GameLoading = new AssetManager(); 
    Scene:any;  


    constructor(_pixiApp:PIXI.Application){
        this.pixiApp = _pixiApp;
        this.GameLoading.preload ([
            ["Coins","./assets/Coins.json"],
            ["Entityatlas","./assets/Entityatlas.json"],
            ["HealthBar","./assets/HealthBar.json"],
            ["terrain","./assets/terrain.json"],
            ["atlas","./assets/atlas.json"],
            ["GG_IDLE","./assets/GG_IDLE.json"]
        ])

        this.GameLoading.promises[0].then(()=>{
            let sprite = PIXI.Sprite.from(this.GameLoading.getTexture("GG_IDLE", "sabrisv3-1 1.png"));
            this.pixiApp.stage.addChild(sprite);
        })

        

             

        //this.Scene = new StartGame(this.pixiApp, this.GameLoading);

        _pixiApp.ticker.add((Ticker) => {
            
        });    
    }
}

