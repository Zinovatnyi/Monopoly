export class MenuBarVO {
  public _eventPlus: string; 
  public _eventMinus: string; 
  public _eventName: string; 
  public _currentBar_x: number; 
  public _currentBar_y: number; 
  public _ratio: number; 
  public _modelValue:number; 
  public _modelMaxValue: number; 
  public _modelMinValue: number; 
  public _modelStepValue: number; 
  public _menuBarUnit: string; 
  public _menuBartoggle: string;

  constructor() {
  }

  get eventName():string{
    return this._eventName;
  }

  get eventPlus():string{
    return this._eventPlus;
  }

  get eventMinus():string{
    return this._eventMinus;
  }

  get currentBar_x():number{
    return this._currentBar_x;
  }

  get currentBar_y():number{
    return this._currentBar_y;
  }

  get ratio():number{
    return this._ratio;
  }

  get modelValue():number{
    return this._modelValue;
  }

  get modelMaxValue():number{
    return this._modelMaxValue;
  }

  get modelMinValue():number{
    return this._modelMinValue;
  }

  get modelStepValue():number{
    return this._modelStepValue;
  }

  get menuBarUnit():string{
    return this._menuBarUnit;
  }

  get menuBartoggle():string{
    return this._menuBartoggle;
  }
  
}

