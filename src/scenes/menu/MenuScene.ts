import { Scene } from '../Scene';
import { SimpleButton } from '../../ui/SimpleButton';
import { Constants } from '../../core/Constants';
import { Model } from '../../core/Model';
import { GlobalDispatcher } from '../../core/GlobalDispatcher';
import { MenuBar } from '../../ui/MenuBar';
import { MenuBarVO } from '../../scenes/menu/MenuBarVO';
import { MenuFieldsManager } from '../../scenes/menu/MenuFieldsManager';

export class MenuScene extends Scene {
  public playButton: SimpleButton;
  public amount_bar: MenuBar;
  public player_bar: MenuBar;
  public menu_bar_value: PIXI.Text;
  public menuFieldsManager: MenuFieldsManager; 

  constructor() {
    super();
    this.playButton = new SimpleButton(Constants.GOTOGAMEBTNPRESSED, 'playBtn', 500, 400);
    this.addChild(this.playButton);
    this.setupAmountBar();
    this.setupPlayerBar();
    this.setupInputFields();
    this.addListeners();
  }

  public setupAmountBar(){
    let menuBarVO: MenuBarVO = new MenuBarVO();
        menuBarVO._eventPlus = Constants.AMOUNT_BAR_PLUS_PRESSED;
        menuBarVO._eventMinus = Constants.AMOUNT_BAR_MINUS_PRESSED;
        menuBarVO._currentBar_x = 10;
        menuBarVO._currentBar_y = 10;
        menuBarVO._ratio = Constants.AMOUNT_BAR_RATIO;
        menuBarVO._modelValue = Model.start_amount;
        menuBarVO._modelMaxValue = Model.start_amount_max;
        menuBarVO._modelMinValue = Model.start_amount_min;
        menuBarVO._modelStepValue = Model.start_amount_step;
        menuBarVO._menuBarUnit = "start_amount.png";
        menuBarVO._menuBartoggle = "toggle.png";
        menuBarVO._eventName = "amountBar"; //TODO  make a constant
    this.amount_bar = new MenuBar(menuBarVO);
    this.addChild(this.amount_bar);
  }

  public setupPlayerBar(){
    let menuBarVO: MenuBarVO = new MenuBarVO();
        menuBarVO._eventPlus = Constants.PLAYER_BAR_PLUS_PRESSED;
        menuBarVO._eventMinus = Constants.PLAYER_BAR_MINUS_PRESSED;
        menuBarVO._currentBar_x = 10;
        menuBarVO._currentBar_y = 200;
        menuBarVO._ratio = Constants.PLAYER_BAR_RATIO+20;
        menuBarVO._modelValue = Model.number_of_players;
        menuBarVO._modelMaxValue = Model.number_of_players_max;
        menuBarVO._modelMinValue = Model.number_of_players_min;
        menuBarVO._modelStepValue = Model.number_of_players_step;
        menuBarVO._menuBarUnit = "number_of_players.png";
        menuBarVO._menuBartoggle = "toggle.png";
        menuBarVO._eventName = "playerBar"; //TODO  make a constant
    this.amount_bar = new MenuBar(menuBarVO);
    this.amount_bar.menu_bar_value.visible = false;
    this.addChild(this.amount_bar);
  }

  private addListeners(): void {
    GlobalDispatcher.addEventListener("amountBar", (_modelValue:number) => {Model.start_amount = _modelValue});
    GlobalDispatcher.addEventListener("playerBar", (_modelValue:number) => {Model.number_of_players = _modelValue;});
  }
  
  public setupInputFields(){
    this.menuFieldsManager = new MenuFieldsManager();
    this.addChild(this.menuFieldsManager);
  }

}






























  // public setupInputBoxes(){
  //   var inputBox = new InputBox();
  //   inputBox.interactive = true;
  //   for (let i: number = 0; i < Model._number_of_players; i++){
  //     inputBox.createSimpleBox(10, 350 + i*70);
  //     this.addChild(inputBox);  
  //     var playerName = new InputBoxText(this.players_array[i]);
  //         playerName.position.set(120, 355 + i*70 );
  //     this.addChild(playerName);
  //   }
  // }