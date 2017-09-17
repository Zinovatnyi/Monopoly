import { Scene } from '../Scene';
import { GlobalDispatcher } from '../../core/GlobalDispatcher';
import { SimpleButton } from '../../ui/SimpleButton';
import { Constants } from '../../core/Constants';
import { ChipsManager } from '../../scenes/game/ChipsManager';
import { CellsManager } from './mainTable/CellsManager';
import { CellsUtil } from './mainTable/CellsUtil';
import { GameFieldsManager } from '../../scenes/game/GameFieldsManager';
import { RollBar } from '../../ui/RollBar';
import { PopupVO } from '../../ui/PopUp/PopupVO';
import { PopUpManager } from '../../ui/PopUp/PopUpManager';

export class GameScene extends Scene { 
  public menuButton: SimpleButton;
  public rollButton: SimpleButton; 
  public cellsUtil: CellsUtil = new CellsUtil();
  public popUpManager: PopUpManager = new PopUpManager(this.cellsUtil.cellsParser.cellsConfig, this);
  public cellsManager: CellsManager = new CellsManager(this.cellsUtil.cellsParser.cellsConfig, this);
  public gameFieldsManager: GameFieldsManager = new GameFieldsManager(this);
  public chipsManager: ChipsManager = new ChipsManager(this);
  public rollBar: RollBar = new RollBar(this);
  public currentPlayerIndex: number;
  public currentPlayerPosition: number;

  constructor() {
    super();
    this.createMenuButton();
    this.addListeners();                               
  }

  public createMenuButton(){
    this.menuButton = new SimpleButton(Constants.GOTOMENUBTNPRESSED, 'menuBtn', 930, 600);
    this.addChild(this.menuButton);
  }
  
  public addListeners(){
    GlobalDispatcher.addEventListener('current_position', (_currentPosition:number) => {this.currentPlayerPosition = _currentPosition;});
    GlobalDispatcher.addEventListener('active_player', (_currentPlayer:number) => {this.currentPlayerIndex = _currentPlayer;});
    GlobalDispatcher.addEventListener(Constants.PLAY_CUBES, this.onRollButtonPressed.bind(this));
  }

  public onRollButtonPressed(){
    GlobalDispatcher.dispatch('close_popup');
    this.gameFieldsManager.setPlayerQueue();
    this.rollBar.cube_1.anim.gotoAndPlay(Math.random() * 2);
    this.rollBar.cube_2.anim.gotoAndPlay(Math.random() * 2);
    setTimeout(()=>{
      this.rollBar.cube_1.anim.stop();
      this.rollBar.cube_2.anim.stop();
      this.rollBar.setCubesSum(); 
      this.chipsManager.setCurrentPlayerChip(this.rollBar.cubes_sum, this.currentPlayerIndex);
      this.showPopUp();
    }, 1000);
  }

  public showPopUp(){
    const popupData: PopupVO = new PopupVO();
    if (this.cellsManager.isCompanyType(this.currentPlayerPosition)){
      GlobalDispatcher.dispatch('company_tax');
    if (this.cellsManager.isCompanySold(this.currentPlayerPosition) == false || 
        this.cellsManager.isCompanySold(this.currentPlayerPosition) == undefined){
          popupData.name = 'sellingPopUp';
          GlobalDispatcher.dispatch('show_popup', popupData);
      } 
    }
    if (this.cellsManager.isForceType(this.currentPlayerPosition)){
      popupData.name = 'forceMajeure';
      GlobalDispatcher.dispatch('show_popup', popupData);
    }
    if (this.cellsManager.isChanceType(this.currentPlayerPosition)){
      popupData.name = 'chancePopUp';
      GlobalDispatcher.dispatch('show_popup', popupData);
    }
    if (this.cellsManager.isTaxType(this.currentPlayerPosition)){
      GlobalDispatcher.dispatch('common_tax');
    }
  }

}

