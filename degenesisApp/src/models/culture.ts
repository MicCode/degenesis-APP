import {Cult} from './';

export class Culture {
    bonus : {
        attribute : Array<string>,
        competence : Array<string>
    };
    name : string;
    frequentCults : Array<Cult>;
    logo : string;
}