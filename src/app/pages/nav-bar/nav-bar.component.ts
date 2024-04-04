import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categoryData:any;
  bannersData:any;
  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    const category = this.categoryService.getAllCategory();
    this.categoryData = category.categoryList;
    // const temp = [];
    // for (let i = 0; i < this.categoryData.length; i++) {
    //     if(this.categoryData[i].status === 'show'){
    //       temp.push(this.categoryData[i]);
    //     }      
    // }
    // this.categoryData = temp;        
  }

  getAllBanners(){
    const banners = this.categoryService.getAllBanners();
    this.bannersData = banners.bannersList;
  }

}
