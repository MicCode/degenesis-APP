import { Component, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, Content } from 'ionic-angular';
import {Character, Culture, Concept} from '../../models';
import {Cultures,Concepts} from '../../providers/providers';

@IonicPage()
@Component({
	selector: 'page-character-create',
	templateUrl: 'character-create.html'
})
export class CharacterCreatePage {
	@ViewChild(Content) content: Content;
	private c : Character = new Character();
	private tab : string = "description";
	private cultures: Cultures = new Cultures();
	private concepts: Concepts = new Concepts();
	private selectedCulture : string = "";
	private selectedConcept : string = "";

	constructor(
		public navCtrl: NavController, 
		public viewCtrl: ViewController, 
		public camera: Camera,
	) {
		
	}

	changeCulture(newCulture : Culture){
		this.selectedCulture = newCulture.name;
		this.c.changeCulture(newCulture);
	}

	changeConcept(newConcept : Concept){
		this.selectedConcept = newConcept.name;
		this.c.changeConcept(newConcept);
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

	scrollTo(target){
		let yOffset = document.getElementById(target).offsetTop;
    	this.content.scrollTo(0, yOffset, 1)
	}
}
