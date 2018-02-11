import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Character } from '../../models';
import { Characters } from '../../providers/providers';


@IonicPage()
@Component({
	selector: 'characters-master',
	templateUrl: 'characters.html'
})
export class CharactersPage {
	private allCharacters = [];

	constructor(public navCtrl: NavController, public modalCtrl: ModalController, public characters : Characters,private splashScreen: SplashScreen,private statusBar: StatusBar) {
		this.splashScreen.hide();
		this.statusBar.styleDefault();
		this.refreshCharacters();
	}

	refreshCharacters(){
		this.characters.getAll().then((all)=>{
			this.allCharacters = all;
		});
	}

	addCharacter() {
		let addModal = this.modalCtrl.create('CharacterCreatePage');
		addModal.onDidDismiss(character => {
			if (character) {
				this.refreshCharacters();
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
