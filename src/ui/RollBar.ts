import { SimpleButton } from './SimpleButton';
import { Constants } from '../core/Constants';
import { Cubes } from '../scenes/game/Cubes';

export class RollBar extends PIXI.Sprite{
  public rollButton: SimpleButton;
  public cube_1: Cubes;
  public cube_2: Cubes;
  public cubes_sum: number;

  constructor(parent:PIXI.Container){
    super();
    this.rollButton = new SimpleButton(Constants.PLAY_CUBES, 'rollBtn', 550, 300);
    parent.addChild(this.rollButton);
    this.cube_1 = new Cubes(550, 370);
    this.cube_2 = new Cubes(640, 370);
    parent.addChild(this.cube_2);
    parent.addChild(this.cube_1);
  }

  public setCubesSum(){
    var cube_1_number = this.cube_1.anim.currentFrame + 1;
    var cube_2_number = this.cube_2.anim.currentFrame + 1;
    this.cubes_sum = cube_1_number + cube_2_number;
  }
}