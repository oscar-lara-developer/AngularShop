import { Component } from '@angular/core';

import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  items = ['julian', 'mateo', 'Sebas']

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/camiseta2.png',
      title: 'Camiseta 2',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/gorra.png',
      title: 'Gorra',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/riñonera.png',
      title: 'Riñonera',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/sudadera.png',
      title: 'Sudadera',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/sudadera2.png',
      title: 'Sudadera 2',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/images/sudadera3.png',
      title: 'Sudadera 3',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    },
    {
      id: '8',
      image: 'assets/images/sudadera4.png',
      title: 'Sudadera 4',
      precio: 80000,
      descripcion: 'bla bla bla bla bla'
    }
  ];
  addItem(){
    this.items.push('nuevo item');
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }
}
