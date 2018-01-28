export class Cult {
    name : string;
    bonus : Array<{a:string,c:Array<string>}>;
    logo : string;

    constructor(name?:string,logo?:string,bonus?:Array<{a:string,c:Array<string>}>){
        if(name) this.name = name;
        if(logo) this.logo = logo;
        if(bonus) this.bonus = bonus;
    }
}