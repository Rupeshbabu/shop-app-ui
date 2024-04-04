import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShopCartPageComponent } from './pages/shop-cart-page/shop-cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CategoryProductsListComponent } from './pages/category-products-list/category-products-list.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'category/:name', component: CategoryProductsListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart/:id', component: ShopCartPageComponent },
  { path: 'checkout/:id', component: CheckoutPageComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
