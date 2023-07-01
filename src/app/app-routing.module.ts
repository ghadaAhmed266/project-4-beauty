import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartComponent } from './cart/cart/cart.component';
import { OrderComponent } from './order/order/order.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'shop',component:ProductListComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
