import { Brand } from "../brand";
import { Category } from "../category/category";

export class Product {
    id:number;
    name:string;
    description:string;
    price:number;
    discount:number;
    publishedIn:Date;
    addToCart:boolean;
    addToWishList:boolean;
    compare:boolean;
    quantity:Number;
    imageName:string;
    categoryId:number;
    brandId:number;
    new:boolean;

   // brand:Brand;
}
