import{ IsEntity } from '../IsEntity'


export class Cell implements IsEntity {
    constructor(
        public left:number, 
        public top:number, 
        public height:number, 
        public width:number, 
        public color:string,
        public moss:boolean,
        public grass:boolean,
        public blossom: boolean) {
        this.left = left;
        this.top = top;
        this.height = height;
        this.width = width;
        this.color = color;
        this.moss = moss;
        this.grass = grass;
        this.blossom = blossom;
    }
}
