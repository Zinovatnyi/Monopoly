import { SimpleBox } from '../SimpleBox';
import { SimpleButton } from '../SimpleButton'; 
import { Constants } from '../../core/Constants';
import { GlobalDispatcher } from '../../core/GlobalDispatcher';
import { CellVO} from '../../scenes/game/mainTable/CellVO';

export class SellingPopUp extends PIXI.Sprite{
  public box: SimpleBox;
  private buyBtn: SimpleButton;
  private auctionBtn: SimpleButton;
  public cellData: CellVO;

  constructor(public pos_x:number, public pos_y:number){
    super();
    this.box = new SimpleBox(this.pos_x, this.pos_y, 320, 150, 0xFFFFFF, "  ");
    this.buyBtn = new SimpleButton(Constants.TO_BUY_BTN_PRESSED, "buyBtn", this.pos_x+10, this.pos_y+100);
    this.buyBtn.on('mousedown', ()=>{GlobalDispatcher.dispatch(Constants.TO_BUY_BTN_PRESSED);});
    this.auctionBtn = new SimpleButton(Constants.TO_BUY_BTN_PRESSED, "auctionBtn", this.pos_x+150, this.pos_y+100);
    this.box.addChild(this.buyBtn);
    this.box.addChild(this.auctionBtn);
    this.addChild(this.box);
    this.visible = false;
  }

  public setPupupInfo(cellData:CellVO){
    this.box.inputText.text = cellData.companyName+" - "+cellData.companyPrice;
    GlobalDispatcher.dispatch('company_name', cellData.companyName);
  }

}
