import{ IsEntity } from '../IsEntity.js'


export class Player implements IsEntity{
    constructor(
        public left:number,
        public top:number,
        public height:number,
        public width:number,
        public color:string) {
        this.left = left;
        this.top = top;
        this.height = height;
        this.width = width;
        this.color = color;
    }
}