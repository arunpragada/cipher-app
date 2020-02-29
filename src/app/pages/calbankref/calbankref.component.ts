import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../../constants/constants';

@Component({
  selector: 'app-calbankref',
  templateUrl: './calbankref.component.html',
  styleUrls: ['./calbankref.component.scss']
})
export class CalbankrefComponent implements OnInit {

  rowData: any[];
  appForm: FormGroup;
  showModuleDiv= false;
  buttonText="Add";
  buttonClass="btn btn-success";
  private gridApi;
 characters = [];
  sItems = [];
  columnDefs = [
    {headerName: 'Food Item', field: 'food_item'},
    {headerName: 'Raw Weight', field: 'raw_weight'},
    {headerName: 'Protein', field: 'protein'},
    {headerName: 'Carbohydrates', field: 'carbohydrates'},   
    {headerName: 'Fat', field: 'fat'},
    {headerName: 'Calories', field: 'calorie'}, 
];

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }
  items1: any[];

  
  dropdownList = [];
 // selectedItems = [];
  dropdownSettings = {};

  ngOnInit() {
    console.log("In INIT Func "+Constants.API_ENDPOINT_1)
    this.buttonText="Add";
    this.appForm  =  this.formBuilder.group({
      food_item: ['', Validators.required],
      raw_weight: ['', Validators.required],
      weight_measure: ['', Validators.required],
      protein: ['', Validators.required],
      carbohydrates: ['', Validators.required],
      fat: ['', Validators.required],
      calorie: ['', Validators.required],
      operation_type:"",
      id:"0",
      selectedItems: [[]]
  });

  fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbankref')
  .then(result => result.json())
  .then(rowData => this.rowData = rowData); 


  fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbank')
  .then(result => result.json())
  .then(rowData => {this.dropdownList = rowData
    //console.log("Data count "+JSON.stringify(this.dropdownList)) 
  }); 

  this.dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'food_item',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  //this.appForm.controls['selectedItems'].valueChanges.subscribe(
    //value => {//this.fooObj.someDate = value;
    //console.log('Changes'+value);
 // }
   // );

  }

  onItemSelect(item: any) {
    console.log(item);
    
    for (let d of this.dropdownList) {
        
      if(item.id == d.id){
        console.log( ": " + JSON.stringify(d));
        this.characters.push(d);
      }
    }
    
  }
  OnItemDeSelect(item:any){
    console.log(item);
    var i=0;
    for (let d of this.characters) {
        
      if(item.id == d.id){
        console.log( ": " + JSON.stringify(d));
        this.characters.splice(i, 1);      }
      i++;
    }
}
  onSelectAll(items: any) {
    console.log(items);
  }
  ShowFilter = false;
  limitSelection = false;
  toogleShowFilter() {
    this.ShowFilter = !this.ShowFilter;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
}

handleLimitSelection() {
    if (this.limitSelection) {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
    } else {
        this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
    }
}




  keyword = 'food_item';

  get formControls() { return this.appForm.controls; }

  onGridReady(params) {
    this.gridApi = params.api; // To access the grids API
  }
  enableModuleDiv(){
    this.showModuleDiv=true;
this.buttonText="Add";
this.buttonClass="btn btn-success";
this.characters = [];
var a = [];
this.formControls.food_item.setValue("");
this.formControls.selectedItems.setValue(a);

  }
  quickSearchValue: string = '';
  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(this.quickSearchValue);
}

addData(){
    
  //console.log("Data is "+JSON.stringify(this.appForm.value))
  //console.log("Data is "+JSON.stringify(this.characters))
  var fData={};
  fData["food_item"]=this.appForm.get("food_item").value;
  fData["item_ref"]=this.characters;
  if(this.buttonText=="Add")
  fData["opration_type"]="add";
  else if(this.buttonText=="Update"){
  fData["opration_type"]="update";
  fData["id"]=this.appForm.get("id").value;
}

  console.log("Data is "+JSON.stringify(fData));
  var postData = 'myData=' + JSON.stringify(fData);
  const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/additemref", postData, options).subscribe(
  (t) => {console.log(t+"=="+this.buttonText);
    if(this.buttonText === "Add"){
    this.formControls.id.setValue(t);
   // this.ngOnInit();
    var a = [];
  this.formControls.selectedItems.setValue(a);
  this.formControls.food_item.setValue("");
  this.appForm.get("selectedItems").setValue(a);
  this.characters = [];
  fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbankref')
  .then(result => result.json())
  .then(rowData => this.rowData = rowData); 


    
  }
  else if(this.buttonText=="Update"){

    var a = [];
    this.formControls.selectedItems.setValue(a);
    this.formControls.food_item.setValue("");
    this.appForm.get("selectedItems").setValue(a);
    this.characters = [];
    fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbankref')
    .then(result => result.json())
    .then(rowData => this.rowData = rowData); 
    this.buttonText = "Add";
    this.buttonClass="btn btn-success";

  }
  }
);

alert(this.buttonText+" Operation Success..");

}


onRowClicked(event: any) { 
  //console.log(event.data);
  this.showModuleDiv=true;
 // this.rowIndex=event.rowIndex;
 this.characters= [];
 event.data.operation_type="update";
// this.selectedItems = [];
 //this.formControls.selectedItems.setValue([]);
 this.appForm.get("selectedItems").setValue([]);
 

 //console.log("Afer resetting "+JSON.stringify(this.appForm.get("selectedItems").value));

 var splitted = event.data.item_ref.split(",", -1); 
 this.formControls.food_item.setValue(event.data.food_item);
 console.log("Ref Items == "+event.data.item_ref);
 //this.formControls.selectedItems.setValue(a);
 var a = [];

  for (let d of this.dropdownList) {
    if(splitted.indexOf(d.id) !== -1){
   
      var dropData={};
      dropData["id"]=d.id;
      dropData["food_item"]=d.food_item;
      a.push(dropData);     
     
      this.characters.push(d);
    }
  }
  console.log("A Setting "+JSON.stringify(a))
  this.sItems=a;
 this.formControls.selectedItems.setValue(a);
 //this.appForm.get("selectedItems").setValue(a);
this.appForm.get("id").setValue(event.data.id);
  this.buttonText="Update";
  this.buttonClass="btn btn-info";
}





}
