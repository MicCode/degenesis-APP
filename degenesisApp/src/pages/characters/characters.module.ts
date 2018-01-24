import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CharactersPage } from './characters';

@NgModule({
	declarations: [
		CharactersPage,
	],
	imports: [
		IonicPageModule.forChild(CharactersPage),
		TranslateModule.forChild()
	],
	exports: [
		CharactersPage
	]
})
export class CharactersPageModule { }
