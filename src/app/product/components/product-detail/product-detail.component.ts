import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.ProductsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct(){
    const newProduct: Product = {
      id:'222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'nuevo producto'
    };
    this.ProductsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 55555,
      description: 'edicion titulo'
    };
    this.ProductsService.updateProduct('2',updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
    this.ProductsService.deleteProduct('19')
    .subscribe(rta => {
      console.log(rta);
    });
  }

}
