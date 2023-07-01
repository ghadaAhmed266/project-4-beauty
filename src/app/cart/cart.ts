import { Time } from "@angular/common";

export class Cart {
    id:number;
    userId:number;
    date:Date;
    time:Time;
    productsIds:number[];
    quantities:number[];
    
}
