import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/shared/app-header/app-header.component';
import { AppFooterComponent } from './components/shared/app-footer/app-footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstroreComponent } from './components/bookstore-app/bookstrore/bookstrore.component';
import { StoreFilterComponent } from './components/filters/store-filter/store-filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { ProductListServiceComponent } from './components/product-list/product-list-service.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    NavComponent,
    BookstroreComponent,
    StoreFilterComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductListServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductListServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
