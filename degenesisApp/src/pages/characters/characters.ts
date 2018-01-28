import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Character } from '../../models';
import { Characters } from '../../providers/providers';


@IonicPage()
@Component({
	selector: 'characters-master',
	templateUrl: 'characters.html'
})
export class CharactersPage {
	private allCharacters = [];

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public characters : Characters) {
		this.characters.getAll().then((all)=>{
			this.allCharacters = all;
			console.log(this.allCharacters);
		});
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
