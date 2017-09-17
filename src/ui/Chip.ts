export class Chip extends PIXI.Sprite{
  private simpleChip: PIXI.Sprite

  constructor(chipColor:string, pos_x:number, pos_y:number){
    super();
    this.simpleChip = new PIXI.Sprite(PIXI.loader.resources.SpriteSheet.textures["chip_"+chipColor+".png"]);
    this.simpleChip.position.set(pos_x, pos_y);
    this.addChild(this.simpleChip);
    //this.visible = false; //если вешать на this.simpleChip.visible = false; - почему-то не работает
  }

}