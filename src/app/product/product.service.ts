import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit,OnDestroy{
  private products :Product[]=[
    { id:0,name:'foundation',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:200,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'1.jpg',categoryId:0,brandId:0,new:true
    },
    { id:1,name:'bronzer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:203,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'2.jpg',categoryId:0,brandId:0,new:true
    },
    { id:2,name:'face primer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:305,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'3.jpg',categoryId:0,brandId:0,new:true
    },
    { id:3,name:'concealer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:109,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'5.jpg',categoryId:0,brandId:0,new:true
    },
    { id:4,name:'foundation',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:200,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'1.jpg',categoryId:0,brandId:0,new:true
    },
    { id:5,name:'bronzer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:203,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'2.jpg',categoryId:0,brandId:0,new:true
    },
    { id:6,name:'foundation',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:200,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'1.jpg',categoryId:0,brandId:0,new:true
    },
    { id:7,name:'bronzer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:203,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'2.jpg',categoryId:0,brandId:0,new:true
    },
    { id:8,name:'face primer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:305,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'3.jpg',categoryId:0,brandId:0,new:true
    },
    { id:9,name:'concealer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:109,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'5.jpg',categoryId:0,brandId:0,new:true
    },
    { id:10,name:'foundation',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:200,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'1.jpg',categoryId:0,brandId:0,new:true
    },
    { id:11,name:'bronzer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:203,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'2.jpg',categoryId:0,brandId:0,new:true
    },
    { id:12,name:'foundation',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:200,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'1.jpg',categoryId:0,brandId:0,new:true
    },
    { id:13,name:'bronzer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:203,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'2.jpg',categoryId:0,brandId:0,new:true
    },
    { id:14,name:'face primer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:305,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'3.jpg',categoryId:0,brandId:0,new:true
    },
    { id:15,name:'concealer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:109,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'5.jpg',categoryId:0,brandId:0,new:true
    },
    { id:16,name:'foundation',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:200,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'1.jpg',categoryId:0,brandId:4,new:true
    },
    { id:17,name:'bronzer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:203,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'2.jpg',categoryId:0,brandId:3,new:true
    },
    { id:18,name:'face primer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:305,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'3.jpg',categoryId:0,brandId:2,new:true
    },
    { id:19,name:'concealer',description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
      price:109,discount:50,publishedIn:new Date(),addToCart:false,addToWishList:false,compare:false
      ,quantity:1,imageName:'5.jpg',categoryId:0,brandId:1,new:true
    }
  ];

  constructor() { }
  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
  getProducts()
  {
    return this.products.slice();
  }
  getProduct(id:number){
    return this.products[id];
  }
}