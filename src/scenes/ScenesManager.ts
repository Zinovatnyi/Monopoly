import { CoreRenderer } from '../core/CoreRenderer';
import { GlobalDispatcher } from '../core/GlobalDispatcher';
import { Scene } from './Scene';
import { Constants } from '../core/Constants';
import { MenuScene } from './menu/MenuScene';
import { GameScene } from './game/GameScene';
import { Model } from '../core/Model';
import { GameFieldsManager } from './game/GameFieldsManager';
import { ChipsManager } from './game/ChipsManager';
import { PopUpManager } from '../ui/PopUp/PopUpManager';
import { CellsUtil } from './game/mainTable/CellsUtil';
import { CellsManager } from "../scenes/game/mainTable/CellsManager";
 
export class ScenesManager {
  public menu: Scene;
  public game: Scene;
  public cellsUtil: CellsUtil = new CellsUtil();
  
  constructor() {
    this.menu = this.createScene('menu', MenuScene);
    this.goToScene('menu');
    GlobalDispatcher.addEventListener(Constants.GOTOGAMEBTNPRESSED, () => {
      this.game = this.createScene('game', GameScene);
      var cellsUtil = new CellsUtil();
      //var cellsManager = new CellsManager(this.cellsUtil.cellsParser.cellsConfig, this.game);
      //var cellsParser = new CellsParser(PIXI.loader.resources.GameView.data);
      //var chipsManager = new ChipsManager(this.game);
      //var popUpManager = new PopUpManager(this.cellsUtil.cellsParser.cellsConfig, this.game);
      //var gameFieldsManager = new GameFieldsManager(this.game);
      this.goToScene('game');
    });
    
    GlobalDispatcher.addEventListener(Constants.GOTOMENUBTNPRESSED, () => {this.goToScene('menu');});
  }

  public createScene(id: string, TScene: new () => Scene = Scene): Scene {
    if (CoreRenderer.scenes[id]) return undefined;
    var scene = new TScene();
    CoreRenderer.scenes[id] = scene;
    return scene;
  }
  
  private goToScene(id: string): boolean {
    if (CoreRenderer.scenes[id]) {
      if (CoreRenderer.currentScene) CoreRenderer.currentScene.pause();
        CoreRenderer.currentScene = CoreRenderer.scenes[id];
        CoreRenderer.currentScene.resume();
      return true;
    }
    return false;
  }
}



