import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Character } from '../../models';


@IonicPage()
@Component({
	selector: 'characters-master',
	templateUrl: 'characters.html'
})
export class CharactersPage {
	characters: Character[];

	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
		
	}

	ionViewDidLoad() {

	}

	addCharacter() {
		let addModal = this.modalCtrl.create('CharacterCreatePage');
		addModal.onDidDismiss(character => {
			if (character) {
				
			}
		})
		addModal.present();
	}

	deleteCharacter(item) {
		
	}

	openCharacter(character: Character) {
		this.navCtrl.push('CharacterDetailsPage', {
			character: character
		});
	}
}
