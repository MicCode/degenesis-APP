import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { CharacterCreatePage } from './character-create';
import { CultureItem } from '../../components/culture-item/culture-item';
import { ConceptItem } from '../../components/concept-item/concept-item';
import { PointItem } from '../../components/point-item/point-item';
import { CultItem } from '../../components/cult-item/cult-item';
import { Characters } from '../../providers/providers';
import { Storage } from '@ionic/storage';

@NgModule({
	declarations: [
		CharacterCreatePage,
		CultureItem,
		ConceptItem,
		CultItem,
		PointItem
	],
	imports: [
		IonicPageModule.forChild(CharacterCreatePage),
		TranslateModule.forChild()
	],
	exports: [
		CharacterCreatePage
	],
	providers:[
		Characters
	]
})
export class CharacterCreatePageModule { }
