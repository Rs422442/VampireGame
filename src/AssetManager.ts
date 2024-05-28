import { Loader } from '@pixi/loaders';
import * as UTILS from '@pixi/utils';
import * as PIXI from 'pixi.js';

type atlassheet = [name: string, path: string]; 

export default class AssetManager{
    static resources: any;
    static assetsloader: Loader = new Loader();
    loadflag: boolean = false;
    promises: Promise<void>[] = [];


    constructor(){   

    }

    async preload(atlas: atlassheet[]): Promise<void> {            
      this.promises.push(
        new Promise<void>((resolve, _reject) =>
          {
            atlas.forEach(function(value)
            {
              AssetManager.assetsloader.add(value);
              console.warn('sprites loaded'+ value);
            }); 
            AssetManager.assetsloader.load((_assetsloader, resources) =>          
                {
                  AssetManager.resources = resources;
                  console.warn('all sprites loaded');
                  console.warn(AssetManager.resources)
                  resolve();
                })
          })
      );
      const Element = document.getElementById('preloader')
      
      await Promise.all(this.promises)
        .then((_result) => {Element?.classList.add('preloader--hide'); console.warn('preloader hide')})
        .catch((_err) => console.warn('error loading resources'))
    }

  private getTextureFromResources(resources: UTILS.Dict<PIXI.ImageResource>, key: string, frame?: string): PIXI.Texture
    {
      console.warn(AssetManager.resources)
      if (frame) 
        {
          if (!(resources[key] as any).textures[frame])
            {
              console.error(`[getTexture]: В ${key} нет ${frame}`);
            }
          return (resources[key] as any).textures[frame];
        }

      if (!key)
        {
          console.error("Не указано имя атласа для текстуры");
          return PIXI.Texture.EMPTY;
        }

      if (!(resources[key] as any).texture)
        {
          console.error(`[getTexture]: Нет ${key}`);
        }

      return (resources[key] as any).texture;
    }

   getTexture(key: string, frame?: string): PIXI.Texture
    {
      return this.getTextureFromResources(AssetManager.resources, key, frame);
    }

    /*onLoadCallback(){
      const Element = document.querySelector('.preloader')
      Element?.classList.toggle('.preloader--hide')
      this.loadflag = true;
    };*/
}