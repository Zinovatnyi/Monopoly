export class PopupVO {
  public _name: string;
  
  constructor(){}

  get name():string{
    return this._name;
  }

  set name(_name){
    this._name = _name;
  }
}
