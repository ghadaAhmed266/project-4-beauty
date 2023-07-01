import { Injectable } from '@angular/core';
import { Brand } from './brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  brands:Brand[]=[
    {id:0,name:'oriflame'},
    {id:1,name:'myway'},
    {id:2,name:'oriflameab'},
    {id:3,name:'oriflameabd done'},
    {id:4,name:'melatex'}
  ];
  constructor() { }
  getBrands()
  {
    return this.brands.slice();
  }
  getBrand(index:number)
  {
    return this.brands.slice()[index];
  }

}
