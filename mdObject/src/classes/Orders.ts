import { OrderList, EmrMel } from './classes';
import { StringInternal } from '../factories/factories';
import { IArrayAdditionalMethods } from '../interfaces/interfaces';

export class Orders {

    private _current: string;
    private _currentArray: IArrayAdditionalMethods<OrderList> = [];

    constructor (
        public _mel: EmrMel
    ) {}

    get current() {
        if(this._currentArray.length === 0) {
            this._current = (this._current != null) ? this._current : this._mel.melFunc('{ORDERS_NEW("delimited")}');
            let dataArray = StringInternal(this._current).toList();
            for (let index = 0; index < dataArray.length; index++) {
                this._currentArray.push(new OrderList(dataArray[index]));
            }
        }

        return this._currentArray;
    }
}