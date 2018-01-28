import {Character} from '../models';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Characters {
    constructor(public storage: Storage){
    }

    saveCharacter(character : Character){
        this.storage.set('character_'+character.name,JSON.stringify(character));
        this.storage.get('characters').then((characters)=>{
            var existingCharacters;
            if(characters) existingCharacters = JSON.parse(characters);
            else existingCharacters = [];
            let alreadySaved = -1;
            for(let i = 0; i < existingCharacters.length; i++){
                if(existingCharacters[i].name == character.name) alreadySaved = i;
            }
            let formattedChar = {
                playerName : character.playerName,
                name : character.name,
                culture : character.culture.name,
                cultureLogo : character.culture.logo,
                cult : character.cult.name,
                cultLogo : character.cult.logo,
                concept : character.concept.name,
                conceptLogo : character.concept.logo
            };
            if(alreadySaved > 0) existingCharacters[alreadySaved] = formattedChar;
            else existingCharacters.push(formattedChar);
            this.storage.set('characters',JSON.stringify(existingCharacters));
        });
    }
    getCharacter(characterName : string){
        return this.storage.get('character_'+characterName);
    }
    getAll(){
        return new Promise<Array<any>>(resolve=>{
            this.storage.get('characters').then((characters)=>{
                resolve(JSON.parse(characters));
            });
        });
    }
}