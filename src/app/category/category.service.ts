import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Category } from './category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit,OnDestroy{
  private categoryList :Category[]=[
    {id:1,name:'creative & decor',imgName:'carouselimg1.jpg',description:'save upto 20%'},
    {id:2,name:'pre-made & custom',imgName:'carouselimg2.jpg',description:'save upto 10%'}
  ];

  constructor() { }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
  getCategories()
  {
    return this.categoryList.slice();
  }
}
