import {Concept} from '../models';

export class Concepts{
    private all : Array<Concept>;
    constructor(){
        this.all = [
            this.abomination(),
            this.aventurier(),
            this.chef(),
            this.chercheur(),
            this.conquerant(),
            this.createur(),
            this.destructeur(),
            this.disciple(),
            this.elu(),
            this.ermite(),
            this.fanatique(),
            this.heretique(),
            this.martyr(),
            this.mediateur(),
            this.mentor(),
            this.profanateur(),
            this.protecteur(),
            this.soigneur(),
            this.traditionaliste(),
            this.vertueux(),
            this.visionnaire(),
            this.voyageur()
        ];
    }

    aventurier(){
        return new Concept(
            "Aventurier",
            "aventurier.png",
            {
                attribute : "PHY",
                competence : [
                    {a:"AGI",c:["mobilite"]},
                    {a:"INS",c:["orientation"]}
                ]
            }
        );
    }

    createur(){
        return new Concept(
            "Créateur",
            "createur.png",
            {
                attribute : "AGI",
                competence : [
                    {a:"CHA",c:["art"]},
                    {a:"INT",c:["technologie"]}
                ]
            }
        );
    }

    mentor(){
        return new Concept(
            "Mentor",
            "mentor.png",
            {
                attribute : "INT",
                competence : [
                    {a:"CHA",c:["commandement"]},
                    {a:"INT",c:["legendes"]}
                ]
            }
        );
    }

    martyr(){
        return new Concept(
            "Martyr",
            "martyr.png",
            {
                attribute : "PSY",
                competence : [
                    {a:"PSY",c:["foi","volonte"]},
                    {a:"PHY",c:["resistance"]}
                ]
            }
        );
    }

    chef(){
        return new Concept(
            "Chef",
            "chef.png",
            {
                attribute : "CHA",
                competence : [
                    {a:"PSY",c:["ruse"]},
                    {a:"CHA",c:["commandement"]}
                ]
            }
        );
    }

    chercheur(){
        return new Concept(
            "Chercheur",
            "chercheur.png",
            {
                attribute : "INT",
                competence : [
                    {a:"INT",c:["connaissancesart"]},
                    {a:"INT",c:["science"]}
                ]
            }
        );
    }

    soigneur(){
        return new Concept(
            "Soigneur",
            "soigneur.png",
            {
                attribute : "AGI",
                competence : [
                    {a:"INT",c:["medecine"]},
                    {a:"AGI",c:["artisanat"]}
                ]
            }
        );
    }

    traditionaliste(){
        return new Concept(
            "Traditionaliste",
            "traditionaliste.png",
            {
                attribute : "INS",
                competence : [
                    {a:"INT",c:["legendes"]},
                    {a:"CHA",c:["consideration"]}
                ]
            }
        );
    }

    mediateur(){
        return new Concept(
            "Médiateur",
            "mediateur.png",
            {
                attribute : "PSY",
                competence : [
                    {a:"INS",c:["perception"]},
                    {a:"CHA",c:["negociation"]}
                ]
            }
        );
    }

    ermite(){
        return new Concept(
            "Ermite",
            "ermite.png",
            {
                attribute : "INS",
                competence : [
                    {a:"INS",c:["survie"]},
                    {a:"AGI",c:["furtivite"]}
                ]
            }
        );
    }

    heretique(){
        return new Concept(
            "Hérétique",
            "heretique.png",
            {
                attribute : "PSY",
                competence : [
                    {a:"PSY",c:["ruse"]},
                    {a:"CHA",c:["expression"]}
                ]
            }
        );
    }

    conquerant(){
        return new Concept(
            "Conquérant",
            "conquerant.png",
            {
                attribute : "PHY",
                competence : [
                    {a:"PHY",c:["resistance"]},
                    {a:"PHY",c:["force"]}
                ]
            }
        );
    }

    abomination(){
        return new Concept(
            "Abomination",
            "abomination.png",
            {
                attribute : "PSY",
                competence : [
                    {a:"PSY",c:["domination"]},
                    {a:"PHY",c:["resistance"]}
                ]
            }
        );
    }

    destructeur(){
        return new Concept(
            "Destructeur",
            "destructeur.png",
            {
                attribute : "INS",
                competence : [
                    {a:"PHY",c:["vigueur"]},
                    {a:"PHY",c:["force"]}
                ]
            }
        );
    }

    elu(){
        return new Concept(
            "Elu",
            "elu.png",
            {
                attribute : "CHA",
                competence : [
                    {a:"CHA",c:["expression"]},
                    {a:"CHA",c:["commandement"]}
                ]
            }
        );
    }

    profanateur(){
        return new Concept(
            "Profanateur",
            "profanateur.png",
            {
                attribute : "PSY",
                competence : [
                    {a:"PSY",c:["tromperie"]},
                    {a:"PSY",c:["domination"]}
                ]
            }
        );
    }

    protecteur(){
        return new Concept(
            "Protecteur",
            "protecteur.png",
            {
                attribute : "PSY",
                competence : [
                    {a:"PHY",c:["vigueur"]},
                    {a:"PHY",c:["resistance"]}
                ]
            }
        );
    }

    visionnaire(){
        return new Concept(
            "Visionnaire",
            "visionnaire.png",
            {
                attribute : "CHA",
                competence : [
                    {a:"CHA",c:["seduction"]},
                    {a:"PSY",c:["ruse"]}
                ]
            }
        );
    }

    fanatique(){
        return new Concept(
            "Fanatique",
            "fanatique.png",
            {
                attribute : "INS",
                competence : [
                    {a:"PSY",c:["resactivite"]},
                    {a:"PSY",c:["foi","volonte"]}
                ]
            }
        );
    }

    disciple(){
        return new Concept(
            "Disciple",
            "disciple.png",
            {
                attribute : "CHA",
                competence : [
                    {a:"INS",c:["empathie"]},
                    {a:"INS",c:["perception"]}
                ]
            }
        );
    }

    vertueux(){
        return new Concept(
            "Vertueux",
            "vertueux.png",
            {
                attribute : "INT",
                competence : [
                    {a:"PSY",c:["ruse"]},
                    {a:"CHA",c:["negociation"]}
                ]
            }
        );
    }

    voyageur(){
        return new Concept(
            "Voyageur",
            "voyageur.png",
            {
                attribute : "INS",
                competence : [
                    {a:"INT",c:["legendes"]},
                    {a:"INS",c:["orientation"]}
                ]
            }
        );
    }
}