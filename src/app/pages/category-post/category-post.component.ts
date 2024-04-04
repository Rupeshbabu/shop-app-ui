import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css'],
})
export class CategoryPostComponent implements OnInit {
  categoryList: any;
  categoryProductCount: any;
  categoryCounts: { categoryName: string, count: number, imageUrl: string }[] = [];
  staticAssetImg :string = 'assets/img/';


  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCountCategoryProducts();
  }

  getCountCategoryProducts() {
    const products = this.productService.getAllProducts();
    const category = products.productList;
    const categoryList = this.categoryService.getAllCategory();
    const categoryImg = categoryList.categoryList;
    //Method 1:
    // filter to display product count under category wise    
  //   const categoryMap: { [category: string]: number } = {};
  //   for (let i = 0; i < category.length; i++) {
  //     const catg = category[i].category;
  //     if (categoryMap[catg] === undefined) {
  //       categoryMap[catg] = 1;
  //     } else {
  //       categoryMap[catg]++;
  //     }
  //   }
  //   this.categoryCounts = Object.keys(categoryMap).map(category => ({
  //     categoryName: category,
  //     count: categoryMap[category]
  //   }));
  //  console.log(this.categoryCounts);

  // Method 2: 
  const categoryMap: { [category: string]: { count: number, imageUrl: string } } = {};

    // Initialize categoryMap with counts and image URLs
    category.forEach(product => {
      if (!categoryMap[product.category]) {
        categoryMap[product.category] = { count: 0, imageUrl: '' };
      }
      categoryMap[product.category].count++;
    });

    // Add image URLs to categoryMap
    categoryImg.forEach(image => {
      if (categoryMap[image.name]) {
        categoryMap[image.name].imageUrl = this.staticAssetImg + image.imgUrl;
      }
    });

    // Convert categoryMap to categoryCounts array
    this.categoryCounts = Object.keys(categoryMap).map(category => ({
      categoryName: category,
      count: categoryMap[category].count,
      imageUrl: categoryMap[category].imageUrl
    }));
   console.log(this.categoryCounts);
   
  }
}
