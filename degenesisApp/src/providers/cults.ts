import {Cult} from '../models';

export class Cults{
    private all : Array<Cult>;
    constructor(){
        this.all = [
            this.anabaptiste(),
            this.anubien(),
            this.apocalyptique(),
            this.blafard(),
            this.chroniqueur(),
            this.claniste(),
            this.ferrailleur(),
            this.fleau(),
            this.hellvetique(),
            this.jehammetant(),
            this.juge(),
            this.neolibyen(),
            this.spitalier()
        ];
    }

    anabaptiste(){
        return new Cult(
            "Anabaptiste",
            "anabaptiste.png",
            [
                {a:"PHY",c:["corpsacorps","force"]},
                {a:"INT",c:["legendes"]},
                {a:"AGI",c:["mobilite"]},
                {a:"PSY",c:["foi","volonte"]}
            ]
        );
    }

    anubien(){
        return new Cult(
            "Anubien",
            "anubien.png",
            [
                {a:"PHY",c:["resistance"]},
                {a:"INT",c:["medecine","legendes"]},
                {a:"PSY",c:["foi","volonte"]},
                {a:"CHA",c:["commandement"]}
            ]
        );
    }

    apocalyptique(){
        return new Cult(
            "Apocalyptique",
            "apocalyptique.png",
            [
                {a:"PHY",c:["athletisme"]},
                {a:"AGI",c:["dexterite"]},
                {a:"CHA",c:["seduction","art"]},
                {a:"PSY",c:["ruse"]}
            ]
        );
    }

    blafard(){
        return new Cult(
            "Blafard",
            "blafard.png",
            [
                {a:"AGI",c:["armesaprojectiles","furtivite"]},
                {a:"INT",c:["technologie"]},
                {a:"PSY",c:["ruse"]},
                {a:"INS",c:["perception"]}
            ]
        );
    }

    chroniqueur(){
        return new Cult(
            "Chroniqueur",
            "chroniqueur.png",
            [
                {a:"AGI",c:["artisanat"]},
                {a:"CHA",c:["negociation"]},
                {a:"INT",c:["connaissancesart","technologie"]},
                {a:"PSY",c:["tromperie"]}
            ]
        );
    }

    claniste(){
        return new Cult(
            "Claniste",
            "claniste.png",
            [
                {a:"PHY",c:["vigueur","corpsacorps"]},
                {a:"INT",c:["legendes"]},
                {a:"INS",c:["survie","dressage"]}
            ]
        );
    }

    ferrailleur(){
        return new Cult(
            "Ferrailleur",
            "ferrailleur.png",
            [
                {a:"PHY",c:["athletisme","resistance"]},
                {a:"INT",c:["connaissancesart"]},
                {a:"AGI",c:["artisanat"]},
                {a:"INS",c:["survie"]}
            ]
        );
    }

    fleau(){
        return new Cult(
            "Fléau",
            "fleau.png",
            [
                {a:"PHY",c:["athletisme","force","vigueur"]},
                {a:"AGI",c:["mobilite"]},
                {a:"PSY",c:["reactivite"]}
            ]
        );
    }

    hellvetique(){
        return new Cult(
            "Hellvétique",
            "hellvetique.png",
            [
                {a:"PHY",c:["force","vigueur"]},
                {a:"AGI",c:["armesaprojectiles"]},
                {a:"PSY",c:["reactivite"]},
                {a:"CHA",c:["commandement"]}
            ]
        );
    }

    jehammetant(){
        return new Cult(
            "Jehammétant",
            "jehammetant.png",
            [
                {a:"PHY",c:["corpsacorps"]},
                {a:"AGI",c:["artisanat"]},
                {a:"PSY",c:["foi","volonte"]},
                {a:"CHA",c:["art"]},
                {a:"INS",c:["dressage"]}
            ]
        );
    }

    juge(){
        return new Cult(
            "Juge",
            "juge.png",
            [
                {a:"PHY",c:["corpsacorps"]},
                {a:"AGI",c:["navigation","armesaprojectiles"]},
                {a:"PSY",c:["domination"]},
                {a:"CHA",c:["consideration"]}
            ]
        );
    }

    neolibyen(){
        return new Cult(
            "Néolibyen",
            "neolibyen.png",
            [
                {a:"AGI",c:["armesaprojectiles"]},
                {a:"CHA",c:["consideration","negociation"]},
                {a:"PSY",c:["ruse"]},
                {a:"INS",c:["empathie"]}
            ]
        );
    }

    spitalier(){
        return new Cult(
            "Spitalier",
            "spitalier.png",
            [
                {a:"PHY",c:["resistance"]},
                {a:"INT",c:["medecine","science"]},
                {a:"PSY",c:["foi","volonte"]},
                {a:"INS",c:["perception"]}
            ]
        );
    }
}