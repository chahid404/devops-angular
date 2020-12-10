
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product.modele';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  public currentProduct: Product;
  private url: string = "http://localhost:8080/produits/";
  private urlForUpdate: string = "http://localhost:8080/listProduits/";
  private paramurl: string;
  constructor(private catService: CatalogueService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      this.paramurl = params.get('id');
    });
    console.log(this.paramurl);
    //this.paramurl = this.activatedRoute.paramMap;
    this.catService.getResource(this.url + this.paramurl).subscribe(data => {
      this.currentProduct = data;
      //console.log(this.url);
    }, err => {
      console.log(err);
    })
  }

  onUpdateProduct(value: any) {


    console.log(this.url + this.paramurl);
    return this.catService.updateResource(this.urlForUpdate + this.paramurl, value).subscribe(data => {
      alert("Mise a jour efecuter avec succe");
      this.router.navigateByUrl("/produits")
    }, err => {
      console.log(err);
    })
  }
}
