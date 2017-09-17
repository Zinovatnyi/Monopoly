import "../assets/SpriteSheet.png";
import "../assets/SpriteSheet.json";
import "../assets/GameView.json";
import "../assets/DataConfig.json";
import { CellsManager } from "../scenes/game/mainTable/CellsManager";
import { CellsParser } from "../scenes/game/mainTable/CellsParser";
import { CoreRenderer } from "../core/CoreRenderer";
import { ScenesManager } from "../scenes/ScenesManager";
import { StartParser } from "./StartParser";
import { PopUpManager } from '../ui/PopUp/PopUpManager';
import { CellsUtil } from '../scenes/game/mainTable/CellsUtil';

export class Loader {
  constructor() {                       
    PIXI.loader.add('SpriteSheet', '../src/assets/SpriteSheet.json')
               .add('GameView', '../src/assets/GameView.json')
               .add('DataConfig', '../src/assets/DataConfig.json')
               .on("complete", this.onComplete)
               .load(() => {
                 console.log("all loaded");
                });
  }

  public onComplete(){
    var startParser = new StartParser(PIXI.loader.resources.DataConfig.data);
    var coreRenderer = CoreRenderer;
      coreRenderer.create(1235, 837, true);
    var scenesManager = new ScenesManager;
    //var cellsUtil = new CellsUtil();
    // var popUpManager = new PopUpManager(cellsUtil.cellsParser.cellsConfig, scenesManager.game);
    // var cellsParser = new CellsParser(PIXI.loader.resources.GameView.data);
    // var cellsManager = new CellsManager(cellsParser.cellsConfig, scenesManager.game);
  }
}

