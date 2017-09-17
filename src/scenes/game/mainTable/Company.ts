export class Company {
  private _name:string;
  private _price:number;
  private _tax:number;
  private _isOwner:boolean;

  get name():string{
    return this._name;
  }

  set name(_name){
    this._name = _name;
  }

  get price():number{
    return this._price;
  }

  set price(_price){
    this._price = _price;
  }

  get tax():number{
    return this._tax;
  }

  set tax(_tax){
    this._tax = _tax;
  }

  get isOwner():boolean{
    return this._isOwner;
  }

  set isOwner(_isOwner){
    this._isOwner = _isOwner;
  }

}