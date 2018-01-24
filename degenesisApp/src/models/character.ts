import {Culture,Cult,Concept,Range,Weapon,Ammo,Armor,Item,Potential,Rank} from "./";

export class Character {
    name : string = "";
    playerName : string = "";
    creationDate : Date= new Date();
    deathDate : Date= new Date();
    deathCause : string = "";
    experience : {
        total : number,
        remaining : number
    };
    age : number = 0;
    birthLocation : string = "";
    height : number = 0;
    weight : number = 0;
    skinColor : string = "";
    hairColor : string = "";
    portrait : string = "";
    backgroundStory : string = "";
    money : number = 0;
    culture : Culture = new Culture();
    cult : Cult = new Cult();
    rank : Rank = new Rank();
    concept : Concept = new Concept();
    
    health : {
        ego : Range,
        sporulations : Range,
        wounds : Range,
        trauma : Range
    };

    PHY : {
        base : Range,
        athletisme : Range,
        corpsacorps : Range,
        force : Range,
        lutte : Range,
        resistance : Range,
        vigueur : Range
    };

    AGI : {
        base : Range,
        armesaprojectiles : Range,
        artisanat : Range,
        dexterite : Range,
        furtivite : Range,
        mobilite : Range,
        navigation : Range
    };

    CHA : {
        base : Range,
        art : Range,
        commandement : Range,
        consideration : Range,
        expression : Range,
        negociation : Range,
        seduction : Range
    };

    INT : {
        base : Range,
        concentration : Range,
        connaissancesart : Range,
        legendes : Range,
        medecine : Range,
        science : Range,
        technologie : Range
    };

    PSY : {
        base : Range,
        domination : Range,
        foi : Range,
        reactivite : Range,
        ruse : Range,
        tromperie : Range,
        volonte : Range
    };

    INS : {
        base : Range, 
        dressage : Range,
        empathie : Range,
        orientation : Range,
        perception : Range,
        pulsions : Range,
        survie : Range
    };

    historique : {
        allies : Range,
        autorite : Range,
        renommee : Range,
        reseau : Range,
        ressources : Range,
        secrets : Range
    };

    weapons : Array<Weapon> = [];
    ammo : Array<Ammo> = [];
    armors : Array<Armor> = [];
    items : Array<Item> = [];
    potentials : Array<Potential> = [];

    constructor(){
        this.experience = {
            total : 0,
            remaining : 0
        };
        this.health = {
            ego : new Range(0,24),
            sporulations : new Range(0,24),
            wounds : new Range(0,24),
            trauma : new Range(0,12)
        };
    }
}