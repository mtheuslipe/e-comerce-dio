import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-product-list-service',
  template: ''
})
export class ProductListServiceComponent implements OnInit {
  
  private url:string= 'https://sheet.best/api/sheets/3078503c-bc72-4291-b9dc-b14db12ea38c';
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.get();
  }
  get():Observable<book>{
    return this.httpClient.get<book>(this.url);
  }
}
