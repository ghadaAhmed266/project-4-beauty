import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { faChevronLeft,faChevronRight,faShoppingCart,faHeart,faRandom} from '@fortawesome/free-solid-svg-icons'
import { BehaviorSubject, Subject } from 'rxjs';
import { BrandService } from 'src/app/brand.service';
import { Brand } from 'src/app/brand';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent  implements OnInit{
  categories:Category[];
  products:Product[];
  allProducts:Product[];
  brands:Brand[];
  startId=new BehaviorSubject(0);
  pulse=new BehaviorSubject(8);
  lastId=new BehaviorSubject(this.pulse.value-1);
  counter:number[]=new Array;
  fanext=faChevronRight;
  faprev=faChevronLeft;
  faShoppingCart=faShoppingCart;
  faHeart=faHeart;
  faRandom=faRandom;
  constructor(private categorysrv:CategoryService,private productsrv:ProductService,private brandsrv:BrandService){
  }
  ngOnInit(): void {
    this.categories=this.categorysrv.getCategories();
    this.products=this.allProducts=this.productsrv.getProducts();
    this.brands=this.brandsrv.getBrands();
    for(let i=0;i<this.products.length/this.pulse.value;i++)
    {this.counter[i]=i+1;}
    console.log(this.products.length);
    console.log(this.pulse);
    console.log(this.products.length/this.pulse.value);
    
  }
  prevCollection()
  {
      let start=0;
      let leng=this.products.length;
    if(this.startId.value-this.pulse.value>0)
    {
      this.lastId.next(this.startId.value-1);
      this.startId.next(this.startId.value-this.pulse.value);
    }
    else
    {
      this.lastId.next(this.pulse.value-1);
      this.startId.next(0);
    }
    console.log('start'+this.startId.value+'last'+this.lastId.value);
  }
  specialCollection(index:number)
  {
      let start=(index-1)*this.pulse.value;
      let last=start+this.pulse.value-1;
      length=this.products.length;
    if(start>=0)
    {
      if(start<length-this.pulse.value)
        this.startId.next(start);
        else
        this.startId.next(length-this.pulse.value);
    }
    else this.startId.next(0);
    if(last<length)this.lastId.next(last);
    else this.lastId.next(length-1);
    console.log('start'+this.startId.value+'last'+this.lastId.value);
  }
  nextCollection()
  {
      let last=this.lastId.value;
      let leng=this.products.length;
    if(this.lastId.value + this.pulse.value<leng)
    {
      this.startId.next(last+1);
      this.lastId.next(this.lastId.value+this.pulse.value);
    }
    else
    {
      this.lastId.next(leng-1);
      this.startId.next(leng-this.pulse.value);
    }
    console.log('start'+this.startId.value+'last'+this.lastId.value);

  }
  selectBrand(id:number){
    let filterProducts:Product[];
    for(let i=0;i<this.allProducts.length;i++)
    {
      if(this.allProducts[i].brandId==id)
        filterProducts.push(this.allProducts[i]);
    }
    this.products=filterProducts;
    for(let i=0;i<this.products.length/this.pulse.value;i++)
    {this.counter[i]=i+1;}
  }
 
}
