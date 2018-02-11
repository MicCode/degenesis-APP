import { Component, Input } from '@angular/core';
import {Rank} from '../../models';

@Component({
	selector: 'rank-item',
	templateUrl: 'rank-item.html'
})
export class RankItem {
    constructor(){}

    @Input() rank : Rank;
    @Input() selectedRank : string;

}