import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-products-list',
  templateUrl: './new-products-list.component.html',
  styleUrls: ['./new-products-list.component.css']
})
export class NewProductsListComponent implements OnInit{

  productsData:any;

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    const productList = this.productService.getAllProducts();
    this.productsData = productList;  
  }

}
