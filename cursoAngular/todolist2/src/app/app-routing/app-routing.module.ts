import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes, RouterModule}from "@angular/router";
import{ListComponent} from "../list/list.component";
import{NewItemComponent} from"../new-item/new-item.component";
import { from } from 'rxjs';
var routes : Routes=[
  {path:"",redirectTo:"/items",pathMatch:"full"},
  {path:"items" , component: ListComponent},
  {path:"new-items" , component: NewItemComponent}
];


@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
