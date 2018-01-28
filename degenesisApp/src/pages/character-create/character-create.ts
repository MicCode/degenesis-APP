import { Component, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, Content } from 'ionic-angular';
import {Character, Culture, Concept,Cult} from '../../models';
import {Cultures,Concepts,Cults} from '../../providers/providers';

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
	private cults: Cults = new Cults();
	private concepts: Concepts = new Concepts();
	private selectedCulture : string = "";
	private selectedCult : string = "";
	private selectedConcept : string = "";

	private currentPoints : {
		attributes : number,
		competences : number,
		history : number
	}

	constructor(
		public navCtrl: NavController, 
		public viewCtrl: ViewController, 
		public camera: Camera,
	) {
		this.currentPoints = {
			attributes : 0,
			competences : 0,
			history : 0
		};
		this.updatePoints();
	}

	changeCulture(newCulture : Culture){
		this.selectedCulture = newCulture.name;
		this.c.changeCulture(newCulture);
	}

	changeConcept(newConcept : Concept){
		this.selectedConcept = newConcept.name;
		this.c.changeConcept(newConcept);
	}

	changeCult(newCult : Cult){
		this.selectedCult = newCult.name;
		this.c.changeCult(newCult);
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

	updatePoints(){
		this.currentPoints = {
			attributes : this.c.getAttributesCount(),
			competences : this.c.getCompetencesCount(),
			history : this.c.getHistoryCount()
		};
		console.log(this.currentPoints);
	}

	validate(){
		console.log(this.c);
	}
}
