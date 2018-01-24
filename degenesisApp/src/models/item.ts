import {Cult} from './';

export class Item {
    name : string = "";
    weight : number = 0;
    techLevel : number = 0;
    properties : string = "";
    value : string = "";
    cult : Cult = new Cult();
    resourceLevel : number = 0;

    constructor(){
        
    }
}