export class Concept {
    bonus : {
        attribute : string,
        competence : Array<{a:string,c:Array<string>}>
    };
    name : string;
    logo : string;

    constructor(name?:string,logo?:string,bonus?:{attribute:string,competence:Array<{a:string,c:Array<string>}>}){
        if(name) this.name = name;
        if(logo) this.logo = logo;
        if(bonus) this.bonus = bonus;
    }
}