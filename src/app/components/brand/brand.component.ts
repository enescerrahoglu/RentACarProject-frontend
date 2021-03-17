import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import{Brand} from 'src/app/models/brand'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] = [];
  currentBrand: Brand;
  removeBrand:Brand
  constructor(private brandService : BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item list-group-item-action bg-dark active"
    }else{
      return "list-group-item list-group-item-action "
    }
  }

  getAllBrandsClass(){
    if(!this.currentBrand){
      return "list-group-item list-group-item-action active"
    }else{
      return "list-group-item list-group-item-action"
    }
  }

  removeCurrentBrand(){
    this.currentBrand=this.removeBrand
  }

}