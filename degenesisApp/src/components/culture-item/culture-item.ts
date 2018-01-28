import { Component, Input } from '@angular/core';
import {Culture} from '../../models';

@Component({
	selector: 'culture-item',
	templateUrl: 'culture-item.html'
})
export class CultureItem {
    constructor(){}

    @Input() culture : Culture;
    @Input() selectedCulture : string;

}