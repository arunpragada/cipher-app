import { Component, OnInit } from '@angular/core';
import {Constants } from '../../constants/constants';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    items: any[];
    ngOnInit(){

        
  fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbank')
  .then(result => result.json())
  .then(rowData => {this.items = rowData
    console.log("Data count "+this.items.length) 
  }); 

      }
      keyword = 'food_item';
      public countries = [
        {
          id: 1,
          name: 'Albania',
        },
        {
          id: 2,
          name: 'Belgium',
        },
        {
          id: 3,
          name: 'Denmark',
        },
        {
          id: 4,
          name: 'Montenegro',
        },
        {
          id: 5,
          name: 'Turkey',
        },
        {
          id: 6,
          name: 'Ukraine',
        },
        {
          id: 7,
          name: 'Macedonia',
        },
        {
          id: 8,
          name: 'Slovenia',
        },
        {
          id: 9,
          name: 'Georgia',
        },
        {
          id: 10,
          name: 'India',
        },
        {
          id: 11,
          name: 'Russia',
        },
        {
          id: 12,
          name: 'Switzerland',
        }
      ];
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
