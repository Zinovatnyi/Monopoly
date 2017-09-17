export class Scene extends PIXI.Container {
  public paused: boolean = false;
  public updateCB = function () { };
  constructor() {
      super();
  }
  public onUpdate(updateCB: () => void ) {
    this.updateCB = updateCB;
  }
  public update() {
    this.updateCB();
  }
  public pause() {
    this.paused = true;
  }
  public resume() {
    this.paused = false;
  }
  public isPaused() {
    return this.paused;
  }
}