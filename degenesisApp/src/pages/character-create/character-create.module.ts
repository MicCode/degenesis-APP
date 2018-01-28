import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CharacterCreatePage } from './character-create';
import { CultureItem } from '../../components/culture-item/culture-item';
import { ConceptItem } from '../../components/concept-item/concept-item';
import { PointItem } from '../../components/point-item/point-item';

@NgModule({
	declarations: [
		CharacterCreatePage,
		CultureItem,
		ConceptItem,
		PointItem
	],
	imports: [
		IonicPageModule.forChild(CharacterCreatePage),
		TranslateModule.forChild()
	],
	exports: [
		CharacterCreatePage
	]
})
export class CharacterCreatePageModule { }
