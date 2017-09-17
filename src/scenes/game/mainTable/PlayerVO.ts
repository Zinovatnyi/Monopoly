import { Company } from './Company';

export class PlayerVO {
  private _name:string;
  private _money:number;
  private _color:any;
  private _companies: Company[] = [];
  private _position:number = 0;

  get name():string{
    return this._name;
  }

  set name(_name){
    this._name= _name;
  }

  get money():number{
    return this._money;
  }

  set money(_money){
    this._money = _money;
  }

  get color():any{
    return this._color;
  }

  set color(_color){
    this._color = _color;
  }

  get companies():Company[]{
    return this._companies;
  }

  set companies(_companies){
    this._companies = _companies;
  }

  get position():number{
    return this._position;
  }

  set position(_position){
    this._position = _position;
  }

}

