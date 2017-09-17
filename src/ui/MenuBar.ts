import { GlobalDispatcher } from '../core/GlobalDispatcher';
import { SimpleButton } from '../ui/SimpleButton';
import { Constants } from '../core/Constants';
import { Model } from '../core/Model';
import { MenuBarVO} from './MenuBarVO';

export class MenuBar extends PIXI.Sprite{
  public textureMenu: PIXI.TextureDictionary;
  public currentBar: PIXI.Sprite;
  public currentToggle: PIXI.Sprite;
  public currentPlus: SimpleButton;
  public currentMinus: SimpleButton;
  public menu_bar_value: PIXI.Text;

  constructor(public menuBarVO: MenuBarVO){
    super();
    this.textureMenu = PIXI.loader.resources.SpriteSheet.textures;
    this.initGraphic();
    this.addPlusListener();
    this.addMinusListener();
  }

  public initGraphic(){
    this.currentBar = new PIXI.Sprite(this.textureMenu[this.menuBarVO.menuBarUnit]);
    this.currentBar.position.set(this.menuBarVO.currentBar_x, this.menuBarVO.currentBar_y);

    this.currentToggle = new PIXI.Sprite(this.textureMenu[this.menuBarVO.menuBartoggle]);
    this.currentToggle.position.set(this.menuBarVO.modelValue * this.menuBarVO.ratio, this.currentBar.y + this.currentBar.height - 27)

    this.currentPlus = new SimpleButton(this.menuBarVO.eventPlus, "plus", 347, this.currentBar.y + 52);

    this.currentMinus = new SimpleButton(this.menuBarVO.eventMinus, "minus", 22, this.currentBar.y + 52);

    this.menu_bar_value = new PIXI.Text(this.menuBarVO.modelValue, {fontFamily: "Arial", fontSize: 28, fill: "green"});
    this.menu_bar_value.position.set(this.currentBar.x + this.currentBar.width / 2 - 50, this.currentBar.y + this.currentBar.height / 2 - 10);

    this.addChild(this.currentBar);
    this.addChild(this.currentToggle);
    this.addChild(this.currentPlus);
    this.addChild(this.currentMinus);
    this.addChild(this.menu_bar_value);
  }

  public onPlusButtonPressed(){
      if(this.currentPlus){
        if(this.menuBarVO._modelValue < this.menuBarVO.modelMaxValue){
          this.menuBarVO._modelValue = this.menuBarVO.modelValue + this.menuBarVO.modelStepValue;
          GlobalDispatcher.dispatch(this.menuBarVO.eventName, this.menuBarVO.modelValue);
          this.currentToggle.x = this.currentToggle.x + this.menuBarVO.modelStepValue * this.menuBarVO.ratio;
          this.menu_bar_value.text = this.menuBarVO.modelValue;
        }
      }
  }

  public onMinusButtonPressed(){
      if(this.currentMinus){
        if(this.menuBarVO._modelValue > this.menuBarVO.modelMinValue){
          this.menuBarVO._modelValue = this.menuBarVO.modelValue - this.menuBarVO.modelStepValue;
          GlobalDispatcher.dispatch(this.menuBarVO.eventName, this.menuBarVO.modelValue);
          this.currentToggle.x = this.currentToggle.x - this.menuBarVO.modelStepValue * this.menuBarVO.ratio;
          this.menu_bar_value.text = this.menuBarVO.modelValue;
        }
      }
  }

  public addPlusListener(){
    GlobalDispatcher.addEventListener(this.menuBarVO.eventPlus, this.onPlusButtonPressed.bind(this));
  }

  public addMinusListener(){
    GlobalDispatcher.addEventListener(this.menuBarVO.eventMinus, this.onMinusButtonPressed.bind(this));
  }

  public dispose(){
    GlobalDispatcher.removeEventListener(Constants.AMOUNT_BAR_MINUS_PRESSED, this.onMinusButtonPressed);
  }

}