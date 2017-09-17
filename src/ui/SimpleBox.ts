import { GlobalDispatcher } from '../Core/GlobalDispatcher';
import { Constants } from '../Core/Constants'

export class SimpleBox extends PIXI.Graphics{
  public box: PIXI.Graphics;
  public inputText: PIXI.Text;
  public activePlayer: boolean = false;

  constructor(public pos_x: number, public pos_y: number, public w:number, public h:number, public _color: any, public _text:any){
    super();
    this.box = new PIXI.Graphics;
    this.box.alpha = 4; 
    this.box.beginFill(_color, 0.25);
    this.box.drawRoundedRect(pos_x, pos_y, w, h, 15);
    this.box.endFill();
    this.addChild(this.box);

    this.inputText = new PIXI.Text(_text, {fontFamily: "Arial", fontSize: 28, fill: "black"});
    this.inputText.position.set(pos_x+10, pos_y+10);
    this.box.addChild(this.inputText);
  }

  public boxOutLine(){
    this.box.lineStyle(10, 0xFFFFFF, 1);
    this.box.drawRoundedRect(this.pos_x, this.pos_y, this.w, this.h, 15);
  }

  public outLineClear(){
    this.box.clear();
    this.box.beginFill(this._color, 0.25);
    this.box.drawRoundedRect(this.pos_x, this.pos_y, this.w, this.h, 15);
    this.box.endFill();
  }

}