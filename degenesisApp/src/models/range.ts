export class Range {
    lower : number = 0;
    upper : number = 0;
    min : number = 0;
    max : number = 0;

    constructor(min?:number,max?:number,lower?:number,upper?:number){
        this.max = max ? max : 0;
        this.min = min ? min : 0;
        this.lower = lower ? lower : this.min;
        this.upper = upper ? upper : this.max;
    }
}