import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 20,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/camiseta2.png',
      title: 'Camiseta',
      price: 20,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/gorra.png',
      title: 'Gorra',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/riñonera.png',
      title: 'Riñonera',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/sudadera.png',
      title: 'Sudadera',
      price: 40,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/sudadera2.png',
      title: 'Sudadera',
      price: 40,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/images/sudadera3.png',
      title: 'Sudadera',
      price: 40,
      description: 'bla bla bla bla bla'
    },
    {
      id: '8',
      image: 'assets/images/sudadera4.png',
      title: 'Sudadera',
      price: 40,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  public getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
