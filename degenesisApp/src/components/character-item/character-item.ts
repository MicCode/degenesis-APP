import { Component, Input } from '@angular/core';

@Component({
	selector: 'character-item',
	templateUrl: 'character-item.html'
})
export class CharacterItem {
    constructor(){}

    @Input() character : any;

}