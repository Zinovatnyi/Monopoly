export class CellVO {
    constructor(protected _x: number, 
                protected _y:number, 
                protected _imageAlias:string,
                protected _cellType: string, 
                protected _companyName:string, 
                protected _companyPrice:number,
                protected _companyTax: number,
                protected _commonTax: number) {
    }

    get x():number {
        return this._x;
    }

    get y():number {
        return this._y;
    }

    get imageAlias():string {
        return this._imageAlias;
    }

    get cellType():string {
        return this._cellType;
    }

    get companyName():string {
        return this._companyName;
    }

    get companyPrice():number {
        return this._companyPrice;
    }

    get compamyTax():number {
        return this._companyTax;
    }

    get tax():number {
        return this._commonTax;
    }

}