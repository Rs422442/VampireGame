import Game from './Game';
import * as PIXI from 'pixi.js';

document.addEventListener('DOMContentLoaded', () =>{

  const _pixiapp = new PIXI.Application();

  (async () => {
      await _pixiapp.init({
        width: window.innerWidth,
        height: window.innerHeight,
        resizeTo: window
      });

      document.body.appendChild(_pixiapp.canvas);

      new Game(_pixiapp);
      
  })();
});