import { Component, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import {Character} from '../../models';

@IonicPage()
@Component({
	selector: 'page-character-create',
	templateUrl: 'character-create.html'
})
export class CharacterCreatePage {
	private c : Character = new Character();
	private tab : string = "description";

	constructor(public navCtrl: NavController, public viewCtrl: ViewController, public camera: Camera) {

	}

	ionViewDidLoad() {
		console.log(this.c);
		console.log('test');
	}
	
	cancel() {
		this.viewCtrl.dismiss();
	}

	done() {
		
		this.viewCtrl.dismiss(this.c);
	}
}
