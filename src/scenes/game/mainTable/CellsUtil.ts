import { CellsParser } from './CellsParser'; 
import { GlobalDispatcher } from '../../../core/GlobalDispatcher';

export class CellsUtil {
  public cellsParser: CellsParser = new CellsParser(PIXI.loader.resources.GameView.data);
  public cellsView: any; 

  public getCellPosition_x(_cellIndex:number){
    return this.cellsParser.cellsConfig[_cellIndex].x;
  }

  public getCellPosition_y(_cellIndex:number){
    return this.cellsParser.cellsConfig[_cellIndex].y;
  }

  public getCellType(_cellIndex:number){
    return this.cellsParser.cellsConfig[_cellIndex].cellType;
  }

  public getCompanyName(_cellIndex:number){
    return this.cellsParser.cellsConfig[_cellIndex].companyName;
  }

  public getCompanyPrice(_cellIndex:number){
    return this.cellsParser.cellsConfig[_cellIndex].companyPrice;
  }

  public getCompanyTax(_cellIndex:number){
    return this.cellsParser.cellsConfig[_cellIndex].compamyTax;
  }

  public getCommonTax(_cellIndex:number){
    return this.cellsParser.cellsConfig[_cellIndex].tax;
  }

} 