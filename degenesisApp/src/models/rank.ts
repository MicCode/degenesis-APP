import {Item} from "./";

export class Rank {
    level : string;
    name : string;
    requirements : Array<string>;
    effects : Array<string>;
    equipment : Array<Item>;

    constructor(level?:string,name?:string,requirements?:Array<string>,effects?:Array<string>,equipment?:Array<Item>){
        if(level) this.level = level;
        if(name) this.name = name;
        if(requirements) this.requirements = requirements;
        if(effects) this.effects = effects;
        if(equipment) this.equipment = equipment;
    }
}