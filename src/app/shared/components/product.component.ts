import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  constructor(){
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck () {
    console.log('ngDoCheck');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

  addCart() {
    console.log('añadir al carrito');
    this.productClicked.emit(this.product.id);
  }


}