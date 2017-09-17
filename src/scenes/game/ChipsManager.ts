import { Chip } from '../../ui/Chip';
import { Model } from '../../core/Model';
import { CellsUtil } from '../../scenes/game/mainTable/CellsUtil';
import { GlobalDispatcher } from '../../core/GlobalDispatcher';

export class ChipsManager extends PIXI.Sprite{
  public chipsArray: Chip[] = [];
  public number_of_cells: number = 38;
  public cellsUtil: CellsUtil = new CellsUtil();
  public currentPlayerIndex: number;
  public currentChipPosition: number;

  constructor(public parent:PIXI.Container){
    super();
    this.initChips();
  }

  public initChips(){
    var chipColors: string[] = ["green", "yellow", "blue", "red"];
    for(let i:number = 0; i < Model.number_of_players; i++){
      var playerChip = new Chip(chipColors[i], 25+i*5, 25+i*5);
      this.parent.addChild(playerChip);
      this.chipsArray.push(playerChip);
    }
  }
  
  public moveCurrentChip(currentChip:Chip, currentCellPosition_x:number, currentCellPosition_y:number){
    this.checkCollision(currentChip, currentCellPosition_x, currentCellPosition_y);
  }

  public setCurrentPlayerPos(_currentCubesSum:number, _currentPlayerIndex:number){
    Model.players[_currentPlayerIndex].position = Model.players[_currentPlayerIndex].position + _currentCubesSum;
    if (Model.players[_currentPlayerIndex].position < this.number_of_cells){
      return Model.players[_currentPlayerIndex].position;
    } else {
    Model.players[_currentPlayerIndex].position = Model.players[_currentPlayerIndex].position - this.number_of_cells;
    return Model.players[_currentPlayerIndex].position;
      } 
  }
  
  private checkCollision(currentChip:Chip, currentCellPosition_x:number, currentCellPosition_y:number){
    if (currentChip.x < 1068){
      (currentChip.x < currentCellPosition_x && currentChip.y < 40) ? currentChip.x += 5 : false; 
    } 
    if (currentChip.x >= 1068){
      (currentChip.y < currentCellPosition_y) ? currentChip.y += 5 : false;
    } 
    if (currentChip.y > 665){
      (currentChip.x > currentCellPosition_x) ? currentChip.x -= 5 : false;
    }
    if (currentChip.x < 30){
      (currentChip.y > currentCellPosition_y) ? currentChip.y -= 5 : false;
    }
  }

  public setCurrentPlayerChip(_cubes_sum:number, _currentPlayerIndex:number){
    this.currentChipPosition = this.setCurrentPlayerPos(_cubes_sum, _currentPlayerIndex);  
    GlobalDispatcher.dispatch('current_position', this.currentChipPosition);
    var _this = this;                  
    this.parent.onUpdate(function(){_this.moveCurrentChip(_this.chipsArray[_currentPlayerIndex],
                                    _this.cellsUtil.getCellPosition_x(_this.currentChipPosition), 
                                    _this.cellsUtil.getCellPosition_y(_this.currentChipPosition));});                        
  }
  
}