import { Component, OnInit } from '@angular/core';

import { ProductListServiceComponent } from './product-list-service.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  livros!:any;

  constructor(private bookService: ProductListServiceComponent) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.livros= this.bookService.get().subscribe((data =>{
      this.livros=data;
      console.log(this.livros);
    }))
  }

}
