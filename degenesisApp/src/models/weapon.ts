import { Item,Ammo } from "./";

export class Weapon extends Item {
    handling : number;
    range : {
        short : number,
        long : number
    };
    damages : {
        base : number,
        bonus : string
    };
    clipSize : number;
    calibre : Ammo;
    extensions : number;
}