import { SimpleBox } from '../SimpleBox';
import { CellVO} from '../../scenes/game/mainTable/CellVO';

export class ForceMajeurePopUp extends PIXI.Sprite{
  public box: SimpleBox;
  public cellData: CellVO;

  constructor(public pos_x:number, public pos_y:number){
    super();
    this.box = new SimpleBox(this.pos_x, this.pos_y, 320, 150, 0xFFFFFF, "  ");
    this.addChild(this.box);
    this.visible = false;
  }

  public setPupupInfo(cellData:CellVO){
    this.box.inputText.text = "ForceMajeure";
  }

}