import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Range} from '../../models';

@Component({
	selector: 'point-item',
	templateUrl: 'point-item.html'
})
export class PointItem {
    private _point : Range;

    constructor(){}

    @Input() label : string;
    @Output() slided : EventEmitter<any> = new EventEmitter();
    @Output() pointChange : EventEmitter<any> = new EventEmitter();
    @Input()
    get point(){
        return this._point;
    }
    set point(point : Range){
        this._point = point;
        this.pointChange.emit(this._point);
    }

    changed(){
        this.slided.emit();
    }
}