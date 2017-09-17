import { CellVO } from './CellVO';

 export class CellView extends PIXI.Sprite {
  public textureFields: any;
  public graphic: PIXI.Sprite;

  constructor(cellData:CellVO){
    super();
    this.textureFields = PIXI.loader.resources.SpriteSheet.textures;
    this.graphic = new PIXI.Sprite(this.textureFields[cellData.imageAlias]);
    this.graphic.position.set(cellData.x, cellData.y);
    this.addChild(this.graphic);
  }
}