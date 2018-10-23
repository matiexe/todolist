import { Component, OnInit } from '@angular/core';
import { Item } from 'src/_models/Item';
import{ MockItemsService } from "src/app/_services/mock-items.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:Item[];
  //service:MockItemsService;
  constructor(private service :MockItemsService) {
    //this.service = new MockItemsService();
    this.service.getItems().subscribe(serviceitems=>{
      this.items = serviceitems;
    })
   }
  
  ngOnInit() {
  }
  onRemove(item){
    this.service.itemRemove(item).subscribe(serviceitems=>{
      this.items = serviceitems;
    });
   // this.items = this.items.filter(it=> it !== item);
  }
}
