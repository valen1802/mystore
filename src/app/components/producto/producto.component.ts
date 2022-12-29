import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {


 @Input() product: Product = {
   id:'',
   price: 0,
   image:'', 
   name: ''
 };

 @Output() addedProduct = new EventEmitter<Product>();
    
  
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}
