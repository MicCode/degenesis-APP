import {Culture,Cult,Concept,Range,Weapon,Ammo,Armor,Item,Potential} from "./";

export class Character {
    name : string;
    creationDate : Date;
    deathDate : Date;
    deathCause : string;
    experience : {
        total : number,
        remaining : number
    };
    age : number;
    birthLocation : string;
    height : number;
    weight : number;
    skinColor : string;
    hairColor : string;
    portrait : string;
    backgroundStory : string;
    money : number;
    culture : Culture;
    cult : Cult;
    concept : Concept;
    
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

    weapons : Array<Weapon>;
    ammo : Array<Ammo>;
    armors : Array<Ammo>;
    items : Array<Item>;
    potentials : Array<Potential>;
}