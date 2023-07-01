import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
import { BehaviorSubject } from 'rxjs';
import {faHeart,faRandom,faShoppingCart,faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  product:Product;
  id:number;
  faHeart=faHeart;
  faRandom=faRandom;
  faShoppingCart=faShoppingCart;
  faAngleLeft=faAngleLeft;
  faAngleRight=faAngleRight;
  tab=new BehaviorSubject<number>(0);
  constructor(private route:ActivatedRoute,private productsrv:ProductService){

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.product=this.productsrv.getProduct(this.id);
      }
    )
  }
  tabSelect(t:number)
  {
    this.tab.next(t);
  }

}
