import { Constants } from '../core/Constants';
import { GlobalDispatcher } from '../core/GlobalDispatcher';

export class SimpleButton extends PIXI.Sprite {
  public currentState: PIXI.Sprite;
  public textureMenu: PIXI.TextureDictionary;
  public onDownEvent: string;

  constructor(public event:string, public graphicAlias: string, public pos_x:number, public pos_y:number) {
    super();
    this.onDownEvent = event;
    this.textureMenu = PIXI.loader.resources.SpriteSheet.textures;
    this.initGraphic(this.textureMenu);
    this.addListeners(this.currentState);
  }

  public initGraphic(currentTexture:any) {
    this.currentState = new PIXI.Sprite(currentTexture[this.graphicAlias + ".png"]);
    this.currentState.position.set(this.pos_x, this.pos_y);
    this.currentState.interactive = true;
    this.currentState.buttonMode = true;
    this.addChild(this.currentState);
  }

  public addListeners(currentState:PIXI.Sprite) {
    this.currentState.on('mousedown', ()=> {this.currentState.texture = this.textureMenu[this.graphicAlias + "Down.png"];});
    this.currentState.on('mouseup', ()=> {GlobalDispatcher.dispatch(this.onDownEvent);});
    this.currentState.on('mouseover', ()=> {this.currentState.texture = this.textureMenu[this.graphicAlias + "Over.png"];});
    this.currentState.on('mouseout', ()=> {this.currentState.texture = this.textureMenu[this.graphicAlias + ".png"];});
  }
}