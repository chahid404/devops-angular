import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditproductComponent } from './editproduct/editproduct.component';


const routes: Routes = [
  { path: "produits", component: ProduitComponent },
  { path: "newproduct", component: NewProductComponent },
  { path: "editproduct/:id", component: EditproductComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NewProductComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
