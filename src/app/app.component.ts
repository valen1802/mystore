import { Component } from '@angular/core';

import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
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

  onLoaded(img:string){
    console.log('log padre', img);
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
