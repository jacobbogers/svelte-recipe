export class Ingredient {
    id: number;
    name: string;
    rowNum = 0;
    ctx = { focus: false };
    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
}