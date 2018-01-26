import {Cult} from './';

export class Culture {
    bonus : {
        attribute : Array<string>,
        competence : Array<{a:string,c:Array<string>}>
    };
    name : string;
    frequentCults : Array<string>;
    logo : string;

    constructor(name?:string,logo?:string,bonus?:{attribute:Array<string>,competence:Array<{a:string,c:Array<string>}>},frequentCults?:Array<string>){
        if(name) this.name = name;
        if(logo) this.logo = logo;
        if(bonus) this.bonus = bonus;
        if(frequentCults) this.frequentCults = frequentCults;
    }
}