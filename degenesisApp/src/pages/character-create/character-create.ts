import { Component, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, Content } from 'ionic-angular';
import {Character, Culture, Concept,Cult,Rank} from '../../models';
import {Cultures,Concepts,Cults,Characters} from '../../providers/providers';

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
	private selectedRank : string = "";

	private currentPoints : {
		attributes : number,
		competences : number,
		history : number
	}

	constructor(
		public navCtrl: NavController, 
		public viewCtrl: ViewController, 
		public camera: Camera,
		private characters : Characters
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
		this.selectedRank = "";
		this.c.changeCult(newCult);
	}

	changeRank(newRank : Rank){
		this.selectedRank = newRank.name;
		this.c.changeRank(newRank);
	}

	ionViewDidLoad() {

	}
	
	cancel() {
		this.viewCtrl.dismiss();
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
		this.c.calculateHealth();
		this.c.calculateMoney();
	}

	validate(){
		this.characters.saveCharacter(this.c);
		this.viewCtrl.dismiss(this.c);
	}
}
