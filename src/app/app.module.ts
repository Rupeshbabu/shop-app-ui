import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FeaturedPostComponent } from './pages/featured-post/featured-post.component';
import { CategoryPostComponent } from './pages/category-post/category-post.component';
import { OffersPostComponent } from './pages/offers-post/offers-post.component';
import { NewProductsListComponent } from './pages/new-products-list/new-products-list.component';
import { SubscribePostComponent } from './pages/subscribe-post/subscribe-post.component';
import { TopProductsListComponent } from './pages/top-products-list/top-products-list.component';
import { VendorLogoPostComponent } from './pages/vendor-logo-post/vendor-logo-post.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SimilarProductsComponent } from './pages/similar-products/similar-products.component';
import { ShopCartPageComponent } from './pages/shop-cart-page/shop-cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CategoryProductsListComponent } from './pages/category-products-list/category-products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    NavBarComponent,
    FeaturedPostComponent,
    CategoryPostComponent,
    OffersPostComponent,
    NewProductsListComponent,
    SubscribePostComponent,
    TopProductsListComponent,
    VendorLogoPostComponent,
    ProductDetailsComponent,
    HomePageComponent,
    SimilarProductsComponent,
    ShopCartPageComponent,
    CheckoutPageComponent,
    ContactUsComponent,
    CategoryProductsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
