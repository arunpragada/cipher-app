import { Component, OnInit } from '@angular/core';
import {Constants } from '../../constants/constants';

@Component({
  selector: 'app-dietchartin',
  templateUrl: './dietchartin.component.html',
  styleUrls: ['./dietchartin.component.scss']
})
export class DietchartinComponent implements OnInit {

  constructor() { }
  items: any[];
  keyword = 'food_item';

  ngOnInit() {
    fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbank')
    .then(result => result.json())
    .then(rowData => {this.items = rowData
      console.log("Data count "+this.items.length) 
    }); 
  
  }

  selectEvent(item) {
    console.log("Select Item "+JSON.stringify(item))
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }

}
