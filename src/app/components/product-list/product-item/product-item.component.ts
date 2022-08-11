import { Component, Input, OnInit } from '@angular/core';
import { book } from 'src/app/models/book';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!: book;
  constructor() { }

  ngOnInit(): void {
  }

}
