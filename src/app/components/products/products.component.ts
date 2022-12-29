import { Component, OnInit } from '@angular/core';
import{ Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  total= 0;
  myShoppingCart: Product[] = [];

  products: Product[] = [
    {
      id:'1',
      name:'El mejor juguete', 
      price:556,
      image:'./assets/toy.png'
    }, 

    {
      id:'2',
      name:'Bicicleta casi nueva', 
      price:358,
      image:'./assets/bicicleta.jpg'
    }, 
    {
      id:'3',
      name:'Coleccion de albums', 
      price:354,
      image:'./assets/albums.jpg'
    }, 
    {
      id:'4',
      name:'Libros', 
      price:345,
      image:'./assets/libros.jpg'
    }, 
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onAddToShoppingCart(product: Product){
   this.myShoppingCart.push(product);
   this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
