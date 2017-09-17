import { CellVO } from "./CellVO";

export class CellsParser {
  public cellsConfig: CellVO[] = [];
 
  constructor(resources:any) {
    const cells:any[] = resources.cells;
    for (let i:number=0; i < cells.length; i++) {
    this.cellsConfig.push(new CellVO(cells[i].fieldDefinition.x, 
                                     cells[i].fieldDefinition.y, 
                                     cells[i].imageAlias,
                                     cells[i].cellType,
                                     cells[i].companyName,
                                     cells[i].companyPrice,
                                     cells[i].companyTax,
                                     cells[i].tax));
    }
  }

}