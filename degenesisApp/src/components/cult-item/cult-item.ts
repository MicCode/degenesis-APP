import { Component, Input } from '@angular/core';
import {Cult} from '../../models';

@Component({
	selector: 'cult-item',
	templateUrl: 'cult-item.html'
})
export class CultItem {
    constructor(){}

    @Input() cult : Cult;
    @Input() selectedCult : string;

}