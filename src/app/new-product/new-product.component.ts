import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/product.modele';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public currentProduct: Product;
  constructor(private catService: CatalogueService, private router: Router) { }

  ngOnInit(): void {
  }
  onSaveProduit(data: any) {
    this.catService.saveResource(this.catService.host + "/produits", data)
      .subscribe(res => {
        //console.log(res);
        this.currentProduct = res;
        this.router.navigateByUrl("/produits")
      }, err => {
        console.log(err);
      })
  }

}
