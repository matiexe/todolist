import { Injectable } from '@angular/core';
import{AbstractItemsService} from "./abstract-items.service";
import {Observable, observable} from 'rxjs';
import{Item}from "src/_models/Item";

@Injectable({
  providedIn: 'root'
})
export class MockItemsService extends AbstractItemsService{
  items:Item[];
  constructor() { 
    super();
    this.items =[
      new Item ("comprar carne"),
      new Item("Comprar verdura"),
      new Item ("Comprar carbon"),
    ];

   }
  getItems():Observable<Item[]>{
    return new Observable((observable)=>{
      observable.next(this.items);
      observable.complete();
    });
  }
  itemRemove(item):Observable<Item[]>{
    return new Observable((observable)=>{
      this.items=this.items.filter( it => it !== item);
      observable.next(this.items)
      observable.complete();
    })

  }
  addItem(item):Observable<Item[]>{
   return new Observable((observable)=>{
      this.items.push(item);
      observable.next(this.items)
      observable.complete();
    })
  }
}
