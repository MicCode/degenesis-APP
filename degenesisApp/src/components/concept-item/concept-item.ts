import { Component, Input } from '@angular/core';
import {Concept} from '../../models';

@Component({
	selector: 'concept-item',
	templateUrl: 'concept-item.html'
})
export class ConceptItem {
    constructor(){}

    @Input() concept : Concept;
    @Input() selectedConcept : string;

}