import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';
import{Routes, RouterModule}from "@angular/router";
import{MockItemsService }from "./_services/mock-items.service"
import{ReactiveFormsModule}from "@angular/forms";
  import { from } from 'rxjs';

var routes : Routes=[
  {path:"",redirectTo:"/items",pathMatch:"full"},
  {path:"items" , component: ListComponent},
  {path:"new-items" , component: NewItemComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewItemComponent
  ],
    
  imports: [
    BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule
  ],
  exports:[RouterModule],
  providers: [MockItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
