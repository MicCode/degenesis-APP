import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CharactersPage } from './characters';
import { Characters } from '../../providers/providers';
import { CharacterItem } from '../../components/character-item/character-item';

@NgModule({
	declarations: [
		CharactersPage,
		CharacterItem
	],
	imports: [
		IonicPageModule.forChild(CharactersPage),
		TranslateModule.forChild()
	],
	exports: [
		CharactersPage
	],
	providers:[
		Characters
	]
})
export class CharactersPageModule { }
