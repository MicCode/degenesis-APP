import {Culture} from '../models';

export class Cultures{
    private all : Array<Culture>;
    constructor(){
        this.all = [
            this.africa(),
            this.balkhan(),
            this.borca(),
            this.franka(),
            this.hyprispania(),
            this.pollen(),
            this.purgare()
        ];
    }

    africa(){
        return new Culture(
            "Africa",
            "africa.png",
            {
                attribute : ["INT","PHY"],
                competence : [
                    {a:"PHY",c:["athletisme","lutte"]},
                    {a:"CHA",c:["expression"]},
                    {a:"INT",c:["medecine"]},
                    {a:"PSY",c:["reactivite"]}
                ]
            },
            ["Anubien","Apocalyptique","Claniste","Ferrailleur","Fléau","Néolybien"]
        );
    }

    balkhan(){
        return new Culture(
            "Balkhan",
            "balkhan.png",
            {
                attribute : ["PHY","PSY"],
                competence : [
                    {a:"PHY",c:["force","lutte"]},
                    {a:"CHA",c:["commandement"]},
                    {a:"PSY",c:["reactivite"]},
                    {a:"INS",c:["empathie"]}
                ]
            },
            ["Apocalyptique","Blafard","Claniste","Ferrailleur","Hellvetique","Jehammétan"]
        );
    }

    borca(){
        return new Culture(
            "Borca",
            "borca.png",
            {
                attribute : ["AGI","INS"],
                competence : [
                    {a:"PHY",c:["resistance"]},
                    {a:"INT",c:["connaissancesart","technologie"]},
                    {a:"AGI",c:["artisanat"]},
                    {a:"INS",c:["survie"]}
                ]
            },
            ["Anabaptiste","Apocalyptique","Chroniqueur","Claniste","Ferrailleur","Hellvetique","Jehammétan","Juge","Spitalier"]
        );
    }

    franka(){
        return new Culture(
            "Franka",
            "franka.png",
            {
                attribute : ["CHA","INS"],
                competence : [
                    {a:"PHY",c:["vigueur"]},
                    {a:"CHA",c:["negociation"]},
                    {a:"AGI",c:["furtivite"]},
                    {a:"PSY",c:["foi","volonte","tromperie"]}
                ]
            },
            ["Anabaptiste","Apocalyptique","Chroniqueur","Claniste","Ferrailleur","Hellvetique","Juge","Spitalier"]
        );
    }

    hyprispania(){
        return new Culture(
            "Hyprispania",
            "hyprispania.png",
            {
                attribute : ["INT","AGI"],
                competence : [
                    {a:"PHY",c:["corpsacorps"]},
                    {a:"INT",c:["medecine"]},
                    {a:"AGI",c:["furtivite","mobilite"]},
                    {a:"INS",c:["orientation"]}
                ]
            },
            ["Anubien","Apocalyptique","Blafard","Claniste","Ferrailleur","Fléau","Jehamétant","Néolibyen","Spitalier"]
        );
    }

    pollen(){
        return new Culture(
            "Pollen",
            "pollen.png",
            {
                attribute : ["PHY","INS"],
                competence : [
                    {a:"PHY",c:["corpsacorps","vigueur"]},
                    {a:"INT",c:["legendes"]},
                    {a:"INS",c:["empathie","survie"]}
                ]
            },
            ["Anabaptiste","Apocalyptique","Chroniqueur","Claniste","Ferrailleur","Spitalier"]
        );
    }

    purgare(){
        return new Culture(
            "Purgare",
            "purgare.png",
            {
                attribute : ["CHA","PSY"],
                competence : [
                    {a:"CHA",c:["consideration"]},
                    {a:"INT",c:["legendes"]},
                    {a:"PSY",c:["domination","foi","volonte"]},
                    {a:"INS",c:["dressage"]}
                ]
            },
            ["Anabaptiste","Apocalyptique","Claniste","Ferrailleur","Hellvétique","Spitalier"]
        );
    }
}