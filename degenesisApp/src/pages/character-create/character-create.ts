import { Component, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicPage, NavController, ViewController, Content, AlertController } from 'ionic-angular';
import {Character, Culture, Concept,Cult} from '../../models';
import {Cultures,Concepts,Cults,Characters} from '../../providers/providers';
import { Rank } from '../../models/rank';

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
		private characters : Characters,
		public alertCtrl: AlertController
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
		console.log(this.c);
		var completion = this.c.checkCompletion();
		if(!completion.complete){
			var alertTitle : string = "";
			var alertMessage : string = "";
			switch(completion.error){
				case "noname" :
					let alertNoName = this.alertCtrl.create({
						title: "Pas de nom",
						message: "Attention le personnage n'a pas de nom, impossible de l'enregistrer",
						buttons: ["OK"]
					});
					alertNoName.present();
					break;
				case "incomplete" :
					let missingInfos = "";
					if(!this.c.cult || !this.c.cult.name || this.c.cult.name.length <= 0) missingInfos += "<br>- Culte ";
					if(!this.c.rank || !this.c.rank.name || this.c.rank.name.length <= 0) missingInfos += "<br>- Rang ";
					if(!this.c.culture || !this.c.culture.name || this.c.culture.name.length <= 0) missingInfos += "<br>- Culture ";
					if(!this.c.concept || !this.c.concept.name || this.c.concept.name.length <= 0) missingInfos += "<br>- Concept ";


					let confirmIncomplete = this.alertCtrl.create({
						title: "Informations incomplètes",
						message: "Les éléments suvants n'ont pas été définis : " + missingInfos,
						buttons: [
							{
								text: 'Annuler',
								handler: () => {

								}
							},
							{
								text: 'Sauvegarder quand même',
								handler: () => {
									this.saveAndClose();
								}
							}
						]
					});
					confirmIncomplete.present();
					break;
				case "badcount" : 
					let confirmBadCount = this.alertCtrl.create({
						title: "Problème de points",
						message: "Attention, le bon nombre de points n'a pas été attribué",
						buttons: [
							{
								text: 'Annuler',
								handler: () => {

								}
							},
							{
								text: 'Sauvegarder quand même',
								handler: () => {
									this.saveAndClose();
								}
							}
						]
					});
					confirmBadCount.present();
					break;
			}
			
		}
		else this.saveAndClose();
	}

	cancel(){
		this.viewCtrl.dismiss(); 
	}
	saveAndClose(){
		this.characters.saveCharacter(this.c);
		this.viewCtrl.dismiss(this.c);
	}
}
