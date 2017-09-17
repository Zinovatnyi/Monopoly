import { Scene } from '../scenes/Scene';

export class CoreRenderer extends Scene {
  public static scenes: any = {};
  public static currentScene: Scene;
  public static renderer: any;
  public static ratio: number = 1;
  public static defaultWidth: number;
  public static defaultHeight: number;
  public static width: number;
  public static height: number;

    public static create(width: number, height: number, scale:Boolean=false) {
      if (CoreRenderer.renderer) return this;
      this.defaultWidth = this.width = width;
      this.defaultHeight = this.height = height;
      CoreRenderer.renderer = PIXI.autoDetectRenderer(CoreRenderer.width, CoreRenderer.height);
      document.body.appendChild(CoreRenderer.renderer.view);
        if (scale) {
          CoreRenderer._rescale();
          window.addEventListener('resize', CoreRenderer._rescale, false);
        }                        
        requestAnimationFrame(this.loop.bind(this));
        return this;
    }

    public static _rescale() {
      CoreRenderer.ratio = 1; 
      CoreRenderer.width = CoreRenderer.defaultWidth * CoreRenderer.ratio;
      CoreRenderer.height = CoreRenderer.defaultHeight * CoreRenderer.ratio;
      CoreRenderer.renderer.resize(CoreRenderer.width, CoreRenderer.height);
    }

    public static _applyRatio(displayObj: PIXI.DisplayObject, ratio: number) {
      if (ratio == 1) return;
      var object: any = displayObj;
      object.position.x = object.position.x * ratio;
      object.position.y = object.position.y * ratio;
      object.scale.x = object.scale.x * ratio;
      object.scale.y = object.scale.y * ratio;
      for (var i = 0; i < object.children.length; i++) {
        this._applyRatio(object.children[i], ratio);
      }
    }

    public static loop() {
      requestAnimationFrame(function () { CoreRenderer.loop() });
      if (!CoreRenderer.currentScene || CoreRenderer.currentScene.isPaused()) return;
      CoreRenderer.currentScene.update(); 
      CoreRenderer._applyRatio(CoreRenderer.currentScene, CoreRenderer.ratio);
      CoreRenderer.renderer.render(CoreRenderer.currentScene);
      CoreRenderer._applyRatio(CoreRenderer.currentScene, 1/CoreRenderer.ratio);
    }
}

