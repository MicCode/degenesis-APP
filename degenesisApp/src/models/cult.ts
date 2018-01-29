import { Rank } from "./rank";

export class Cult {
    name : string;
    bonus : Array<{a:string,c:Array<string>}>;
    logo : string;
    ranks : Array<Rank>;

    constructor(name?:string,logo?:string,bonus?:Array<{a:string,c:Array<string>}>,ranks?:Array<Rank>){
        if(name) this.name = name;
        if(logo) this.logo = logo;
        if(bonus) this.bonus = bonus;
        if(ranks) this.ranks = ranks;
    }
}