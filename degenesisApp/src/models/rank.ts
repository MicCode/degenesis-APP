import {Cult,Item} from "./";

export class Rank {
    level : string;
    name : string;
    requirements : Array<string>;
    effects : Array<string>;
    equipment : Array<Item>;
    cult : Cult;
}