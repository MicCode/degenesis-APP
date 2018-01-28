import { Component, Input } from '@angular/core';
import {Range} from '../../models';

@Component({
	selector: 'point-item',
	templateUrl: 'point-item.html'
})
export class PointItem {
    constructor(){}

    @Input() point : Range;
    @Input() label : string;

}