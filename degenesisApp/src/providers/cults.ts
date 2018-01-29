import {Cult,Rank} from '../models';

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
            ],
            [
                new Rank("1","Ravi"),
                new Rank("2","Orgiastique"),
                new Rank("2","Ascète"),
                new Rank("3","Fureur"),
                new Rank("3","Elyséen"),
                new Rank("4","Sublime"),
                new Rank("4","Emissaire"),
                new Rank("5","Achéron"),
                new Rank("5","Conseiller"),
                new Rank("6","Baptiste")
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
            ],
            [
                new Rank("1","Initié"),
                new Rank("2","Enchanteur"),
                new Rank("3","Embaumeur"),
                new Rank("3","Guérisseur"),
                new Rank("3","Faucille"),
                new Rank("4","Prophète des Ames"),
                new Rank("4","Hécatéen"),
                new Rank("4","Ammout"),
                new Rank("5","Hogon")
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
            ],
            [
                new Rank("1","Pinson"),
                new Rank("1","Sterne"),
                new Rank("1","Colibri"),
                new Rank("2","Epervier"),
                new Rank("2","Coucou"),
                new Rank("2","Cigogne"),
                new Rank("2","Pie"),
                new Rank("2","Chouette"),
                new Rank("2","Pic-Vert"),
                new Rank("2","Vautour"),
                new Rank("2","Mouette"),
                new Rank("2","Pélican"),
                new Rank("2","Marabout"),
                new Rank("2","Ibis"),
                new Rank("2","Toko"),
                new Rank("3","Corneille"),
                new Rank("3","Albatros"),
                new Rank("3","Busard"),
                new Rank("X","Phénix")
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
            ],
            [
                new Rank("1","Spectre"),
                new Rank("2","Solaire"),
                new Rank("2","Eveilleur"),
                new Rank("2","Fantôme"),
                new Rank("3","Aurore"),
                new Rank("3","Rédempteur"),
                new Rank("3","Cyclope"),
                new Rank("4","Aspirant"),
                new Rank("4","Halo"),
                new Rank("5","Démagogue")
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
            ],
            [
                new Rank("1","Bit"),
                new Rank("2","Agent"),
                new Rank("3","Médiateur"),
                new Rank("3","Occulteur"),
                new Rank("4","Diffuseur"),
                new Rank("4","Fusible"),
                new Rank("5","Fragment"),
                new Rank("5","Paradigme"),
                new Rank("5","Skalar"),
                new Rank("O","Zéro"),
                new Rank("X","Aiguille")
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
            ],
            [
                new Rank("1","Eclaireur"),
                new Rank("2","Chasseur"),
                new Rank("2","Cueilleur"),
                new Rank("3","Guerrier Tribal"),
                new Rank("3","Chaman"),
                new Rank("4","Chef de Clan"),
                new Rank("5","Champion"),
                new Rank("5","Fondateur")
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
            ],
            [
                new Rank("1","Souris"),
                new Rank("2","Blaireau"),
                new Rank("3","Renard"),
                new Rank("3","Mécanicien"),
                new Rank("3","Récupérateur"),
                new Rank("3","Malfrat des Cartels"),
                new Rank("4","Loup Solitaire"),
                new Rank("4","Artisan"),
                new Rank("4","Loup Alpha"),
                new Rank("4","Estimateur"),
                new Rank("5","Ours des Cavernes"),
                new Rank("5","Légende"),
                new Rank("5","Officier")
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
            ],
            [
                new Rank("1","Dufu"),
                new Rank("2","Hondo"),
                new Rank("2","Damu"),
                new Rank("3","Chaga"),
                new Rank("3","Simba"),
                new Rank("4","Dumisai"),
                new Rank("O","Moyo"),
                new Rank("X","Kifo")
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
            ],
            [
                new Rank("1","Soldat"),
                new Rank("2","Caporal"),
                new Rank("3","Sapeur"),
                new Rank("3","Grenadier"),
                new Rank("3","Garde de Forteresse"),
                new Rank("3","Transmetteur"),
                new Rank("3","Médecin"),
                new Rank("3","Ingénieur"),
                new Rank("3","Approvisionneur"),
                new Rank("3","Eclaireur"),
                new Rank("4","Force Spéciale"),
                new Rank("4","Subalterne"),
                new Rank("4","Infiltré"),
                new Rank("5","Officier Supérieur"),
                new Rank("5","Escouade P-26"),
                new Rank("6","Commandant en Chef")
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
            ],
            [
                new Rank("1","Hagari"),
                new Rank("1","Ismaeli"),
                new Rank("1","Isaaki"),
                new Rank("1","Saraeli"),
                new Rank("2","Voix de Jehammet"),
                new Rank("2","Dalila"),
                new Rank("2","Glaive de Jehammet"),
                new Rank("2","Bienfait de Jehammet"),
                new Rank("2","Maculée"),
                new Rank("2","Fierté de Jehammet"),
                new Rank("2","Immaculée"),
                new Rank("3","Juste"),
                new Rank("3","Abrami"),
                new Rank("3","Arianoï"),
                new Rank("3","Icônide"),
                new Rank("3","Femme Icônide"),
                new Rank("4","Berger"),
                new Rank("4","Sang d'Aries"),
                new Rank("4","Prophète"),
                new Rank("4","Oracle"),
                new Rank("5","Fatum")
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
            ],
            [
                new Rank("1","Vagabond"),
                new Rank("2","Juge des Villes"),
                new Rank("3","Protecteur"),
                new Rank("3","Avocat"),
                new Rank("4","Juge Noir"),
                new Rank("4","Exécuteur"),
                new Rank("4","Arbitre"),
                new Rank("4","Contrôleur"),
                new Rank("5","Procureur"),
                new Rank("5","Commissaire"),
                new Rank("6","Sénateur"),
                new Rank("7","Juge Suprême")
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
            ],
            [
                new Rank("1","Apprenti"),
                new Rank("2","Scribe"),
                new Rank("3","Marchand"),
                new Rank("4","Navigateur"),
                new Rank("4","Magnat"),
                new Rank("4","Ambassadeur"),
                new Rank("5","Cartographe"),
                new Rank("5","Grand Chasseur"),
                new Rank("5","Cheik"),
                new Rank("5","Pillard"),
                new Rank("5","Waziri")  ,
                new Rank("5","Consul"),              
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
            ],
            [
                new Rank("1","Recrue"),
                new Rank("2","Aide-Soignant"),
                new Rank("3","Famulancier"),
                new Rank("4","Préserviste"),
                new Rank("4","Médecin de Terrain"),
                new Rank("4","Chirurgien"),
                new Rank("4","Hygiéniste"),
                new Rank("4","Anesthésiste"),
                new Rank("4","Pharmacien"),
                new Rank("4","Epigénéticien"),
                new Rank("4","Hippocrate"),
                new Rank("5","Chef Commando"),
                new Rank("5","Chef de Clinique"),
                new Rank("6","Recteur"),
                new Rank("6","Spécialiste"),
                new Rank("O","Médecin de Village"),
                new Rank("X","Ancien")
            ]
        );
    }
}