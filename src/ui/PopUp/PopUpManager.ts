import { SellingPopUp } from './SellingPopUp';
import { ChancePopUp } from './ChancePopUp';
import { ForceMajeurePopUp } from './ForceMajeurePopUp';
import { NotEnoughMoneyPopUp } from './NotEnoughMoneyPopUp';
import { GlobalDispatcher } from '../../core/GlobalDispatcher';
import { Constants } from '../../core/Constants';
import { CellVO} from '../../scenes/game/mainTable/CellVO';
import { PopupVO } from './PopupVO';

export class PopUpManager extends PIXI.Sprite{
  public sellingPopUp: SellingPopUp = new SellingPopUp(465, 490);;
  public chancePopUp = new ChancePopUp(465, 490);
  public forceMajeurePopUp = new ForceMajeurePopUp(465, 490);
  public notEnoughMoneyPopUp = new NotEnoughMoneyPopUp(465, 490);
  public currentPlayerPosition:number;
  public currentCompanyName: string;
  public currentPlayerIndex: number;

  constructor(public _cellsConfig:CellVO[], public parent: PIXI.Container){
    super();
    this.addPopUpListeners();
    this.parent.addChild(this.sellingPopUp);
    this.parent.addChild(this.chancePopUp);
    this.parent.addChild(this.forceMajeurePopUp);
    this.parent.addChild(this.notEnoughMoneyPopUp);
  }

  public addPopUpListeners(){
    GlobalDispatcher.addEventListener('current_position', (_currentPosition:number) => {this.currentPlayerPosition = _currentPosition;});
    GlobalDispatcher.addEventListener('show_popup', (popup:PopupVO) => {this.showPopUp(popup);});
    GlobalDispatcher.addEventListener('close_popup', () => {this.closePopUp();});
    GlobalDispatcher.addEventListener('active_player', (activePlayerIndex:number) => {this.currentPlayerIndex = activePlayerIndex;});
    GlobalDispatcher.addEventListener(Constants.TO_BUY_BTN_PRESSED, this.onBuyButtonPressed.bind(this));
  }

  public onBuyButtonPressed(){
    GlobalDispatcher.dispatch('buy_company');
  }

  public showPopUp(_popup:PopupVO){
    if(_popup.name == "sellingPopUp"){
      this.sellingPopUp.setPupupInfo(this._cellsConfig[this.currentPlayerPosition]);
      this.sellingPopUp.visible = true;
    }
    if(_popup.name == "forceMajeure"){
      this.forceMajeurePopUp.setPupupInfo(this._cellsConfig[this.currentPlayerPosition]);
      this.forceMajeurePopUp.visible = true;
    }
    if(_popup.name == "chancePopUp"){
      this.chancePopUp.setPupupInfo(this._cellsConfig[this.currentPlayerPosition]);
      this.chancePopUp.visible = true;
    }
    if(_popup.name == "notEnoughMoneyPopUp"){
      this.notEnoughMoneyPopUp.setPupupInfo(this._cellsConfig[this.currentPlayerPosition]);
      this.notEnoughMoneyPopUp.visible = true;
    }
  }

  public closePopUp(){
    this.sellingPopUp.visible = false;
    this.forceMajeurePopUp.visible = false;
    this.chancePopUp.visible = false;
    this.notEnoughMoneyPopUp.visible = false;
  }

}