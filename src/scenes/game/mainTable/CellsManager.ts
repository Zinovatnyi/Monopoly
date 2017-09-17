import { CellView } from './CellView';
import { CellVO} from './CellVO';
import { Model } from '../../../core/Model';
import { GlobalDispatcher } from '../../../core/GlobalDispatcher';
import { CellsUtil } from './CellsUtil';
import { Company } from '../../../scenes/game/mainTable/Company';
import { PopupVO } from '../../../ui//PopUp/PopupVO';

export class CellsManager {
  public cellsView: CellView[] = []; 
  public currentPlayerIndex: number;
  public currentPlayerPosition: number;
  public cellsUtil: CellsUtil = new CellsUtil();
  public currentCompanyName: string;

  constructor(public _cellsConfig:CellVO[], public parent: PIXI.Container) {
    this.initCells();
    this.addEventListeners();
  }

  public initCells(){
    for (let i:number=0; i < this._cellsConfig.length; i++) {
      const cellView = new CellView(this._cellsConfig[i]);
      this.cellsView.push(cellView);
      this.parent.addChild(cellView);
    }
  }

  public isCompanyType(cellPosition:number){
    var cellType = this.cellsUtil.getCellType(cellPosition);
    return cellType == "Company";
  }

  public isChanceType(cellPosition:number){
    var cellType = this.cellsUtil.getCellType(cellPosition);
    return cellType == "Chance";
  }

  public isForceType(cellPosition:number){
    var cellType = this.cellsUtil.getCellType(cellPosition);
    return cellType == "Force majeure";
  }

  public isTaxType(cellPosition:number){
    var cellType = this.cellsUtil.getCellType(cellPosition);
    return cellType == "Tax";
  }

  public isCompanySold(cellPosition:number){
    for(let i:number = 0; i < Model.players.length; i++){
      for(let j:number = 0; j < Model.players[i].companies.length;j++){
        if(Model.players[i].companies[j].name === this.cellsUtil.getCompanyName(cellPosition)){
          return true;
        }
      }
    }
  }

  public isCurrentPlayerCompanyOwner(cellPosition:number, currentPlayerIndex:number){
    for(let j:number = 0; j < Model.players[currentPlayerIndex].companies.length; j++){
      if(Model.players[currentPlayerIndex].companies[j].name === this.cellsUtil.getCompanyName(cellPosition)){
        return currentPlayerIndex;
      }
    }
  }

  public isMoneyEnough(cellPosition:number, currentPlayerIndex:number){
    var companyPrice = this.cellsUtil.getCompanyPrice(cellPosition);
    var currentPlayerMoney = Model.players[currentPlayerIndex].money
      return currentPlayerMoney >= companyPrice;
  }

  public markCell(curentPlayerPosition:number, currentPlayerIndex:number){
    var filter = new PIXI.filters.ColorMatrixFilter();
    this.cellsView[curentPlayerPosition].filters = [filter];
    var matrix = filter.matrix;
    var colorIndexes = [4, 5, 9, 8.5];
    var count = colorIndexes[currentPlayerIndex];
    matrix[1] = Math.sin(count) * 3;
    matrix[2] = Math.cos(count);
    matrix[3] = Math.cos(count) * 1.5;
    matrix[4] = Math.sin(count / 3) * 2;
    matrix[5] = Math.sin(count / 2);
    matrix[6] = Math.sin(count / 4);
  }

  public addEventListeners(){
    GlobalDispatcher.addEventListener('active_player', (_currentPlayerIndex:number) => {this.currentPlayerIndex = _currentPlayerIndex});
    GlobalDispatcher.addEventListener('current_position', (_currentPlayerPosition:number) => {this.currentPlayerPosition = _currentPlayerPosition});
    GlobalDispatcher.addEventListener('company_name', (companyName:string) => {this.currentCompanyName = companyName;});
    GlobalDispatcher.addEventListener('buy_company', () => {this.onBuyCompanyPressed();});
    GlobalDispatcher.addEventListener('company_tax', () => {this.companyTax();});
    GlobalDispatcher.addEventListener('common_tax', () => {this.commonTax();});
  }

  public onBuyCompanyPressed(){
    this.markCell(this.currentPlayerPosition, this.currentPlayerIndex);
    var moneyEnogh = this.isMoneyEnough(this.currentPlayerPosition, this.currentPlayerIndex);
    if(moneyEnogh == true){
      const company: Company = new Company;
      company.name = this.currentCompanyName;
        Model.players[this.currentPlayerIndex].companies.push(company);
        Model.players[this.currentPlayerIndex].money = Model.players[this.currentPlayerIndex].money - this.cellsUtil.getCompanyPrice(this.currentPlayerPosition);
        GlobalDispatcher.dispatch('player_money', Model.players[this.currentPlayerIndex].money); 
        GlobalDispatcher.dispatch('close_popup');
    } else {
      GlobalDispatcher.dispatch('close_popup');
      var popupData: PopupVO = new PopupVO();
      popupData.name = "notEnoughMoneyPopUp";
      GlobalDispatcher.dispatch('show_popup', popupData);
    }
  }

  public companyTax(){
    if (this.isCompanySold(this.currentPlayerPosition) == true &&
        this.isCurrentPlayerCompanyOwner(this.currentPlayerPosition, this.currentPlayerIndex) !== this.currentPlayerIndex){
        if (Model.players[this.currentPlayerIndex].money >= this.cellsUtil.getCompanyTax(this.currentPlayerPosition)){
            Model.players[this.currentPlayerIndex].money = Model.players[this.currentPlayerIndex].money - this.cellsUtil.getCompanyTax(this.currentPlayerPosition);
            GlobalDispatcher.dispatch('player_money', Model.players[this.currentPlayerIndex].money);
          } 
          else {
            var popupData: PopupVO = new PopupVO();
                popupData.name = "notEnoughMoneyPopUp";
            GlobalDispatcher.dispatch('show_popup', popupData);
      }
    }
  }

  public commonTax(){
    if (this.isTaxType(this.currentPlayerPosition) == true){
      if (Model.players[this.currentPlayerIndex].money >= this.cellsUtil.getCommonTax(this.currentPlayerPosition)) {
      Model.players[this.currentPlayerIndex].money = Model.players[this.currentPlayerIndex].money - this.cellsUtil.getCommonTax(this.currentPlayerPosition)
      GlobalDispatcher.dispatch('player_money', Model.players[this.currentPlayerIndex].money);
    } else {
      var popupData: PopupVO = new PopupVO();
          popupData.name = "notEnoughMoneyPopUp";
      GlobalDispatcher.dispatch('show_popup', popupData);
      }
    }
  }

}
