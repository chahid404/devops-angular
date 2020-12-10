
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  public listProduits: any = undefined;
  public size: number = 5;
  public currentPage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  private currentKeyword: String = "";
  constructor(private catService: CatalogueService, private router: Router) { }

  ngOnInit(): void {

  }

  onGetProducts() {
    this.catService.getProducts(this.currentPage, this.size).subscribe(data => {

      this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>(this.totalPages);
      this.listProduits = data;
    }, err => { console.log(err); });
  }
  onPageProduct(i) {
    this.currentPage = i;
    //this.onGetProducts();
    this.chercherProduit();
  }

  onChercher(form: any) {
    this.currentPage = 0;
    this.currentKeyword = form.keyword;
    this.chercherProduit();
  }


  chercherProduit() {

    this.catService.getProductByKeyword(this.currentKeyword, this.currentPage, this.size).subscribe(data => {
      this.totalPages = data["page"].totalPages;
      this.pages = new Array<number>(this.totalPages);
      this.listProduits = data;
    }, err => { console.log(err); });
  }

  onDeleteProduct(p) {
    let conf = confirm("etes vous sure?");
    if (conf) {
      this.catService.deleteResource(p.id).subscribe(data => {
        this.chercherProduit();
      }, err => { console.log(err); });
    }

  }
  onEditProduct(p) {
    let url = "localhost:8080/listProduits/" + p.id;
    this.router.navigateByUrl("/editproduct/" + p.id);
    console.log(url);

    /*  let url = p._links.self.href;
     this.router.navigateByUrl("/editproduct/" + btoa(url));
     //console.log(url); */
  }
}
