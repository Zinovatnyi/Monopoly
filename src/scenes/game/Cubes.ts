export class Cubes extends PIXI.Sprite{
public anim: any;
  constructor(pos_x: number, pos_y:number){
    super();
    var images = ["cube_1.png", "cube_2.png", "cube_3.png", "cube_4.png", "cube_5.png", "cube_6.png"];
    var frames = [];
    for (var i = 0; i < images.length; i++) {
      frames.push(PIXI.Texture.fromFrame(images[i]));
    }
    this.anim = new PIXI.extras.AnimatedSprite(frames);
    this.anim.position.set(pos_x, pos_y);
    this.anim.anchor.set(0.05);
    this.anim.animationSpeed = 0.2;
    this.addChild(this.anim);
  }

}