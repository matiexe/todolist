import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup,FormBuilder,FormControl} from "@angular/forms"
import { Item } from 'src/_models/Item';
import{ MockItemsService }from"../_services/mock-items.service";
@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItemForm:FormGroup;
  
  constructor(private builder :FormBuilder ,private router:Router ,private service :MockItemsService) {
    this.newItemForm = this.builder.group(new Item(""));
   }
   onSubmit(){
      //console.log(this.newItemForm.value)
      this.service.addItem(this.newItemForm.value).subscribe(items =>{
      this.router.navigateByUrl("/items")
   })
  }
   

  ngOnInit() {
  }

}
