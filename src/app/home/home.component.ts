import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category';
import { Product } from '../product/product';
import { ProductService } from '../product/product.service';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  categories:Category[];
  products:Product[];
  faPlay=faPlay;
  constructor(private categorysrv:CategoryService,private productsrv:ProductService){
  }
  ngOnInit(): void {
    this.categories=this.categorysrv.getCategories();
    this.products=this.productsrv.getProducts();
  }
}
