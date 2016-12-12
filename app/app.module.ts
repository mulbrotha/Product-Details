import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductDetailComponent} from "./product-detail.component";
import {ProductComponent} from "./product.component";
import {DashboardComponent} from "./dashboard.component";
import {ProductService} from "./product.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';
import {ProductSearchComponent} from "./product-search.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule,  InMemoryWebApiModule.forRoot(InMemoryDataService)],
  providers: [ProductService],
  declarations: [ AppComponent, ProductDetailComponent, ProductComponent, DashboardComponent, ProductSearchComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
