import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../../constants/constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  rowIndex=0;
  delshow:boolean =false
 characters = [];
  sItems = [];
  columnDefs = [
    {headerName: 'Food Item', field: 'food_item'},
    {headerName: 'Quantity',  valueGetter: function(params) {
      return params.data.quantity +' '+params.data.quantity_measure ;
  }},
    {headerName: 'Raw Weight', valueGetter: function(params) {
      return params.data.raw_weight +' '+params.data.weight_measure ;
  }},
  //  {headerName: 'Raw Weight', field: 'raw_weight'},
    {headerName: 'Protein', field: 'protein'},
    {headerName: 'Carbohydrates', field: 'carbohydrates'},   
    {headerName: 'Fat', field: 'fat'},
    {headerName: 'Calories', field: 'calorie'}, 
];

  constructor(private formBuilder: FormBuilder,private http: HttpClient,private modalService: NgbModal) { }
  items1: any[];

  
  dropdownList = [];
 // selectedItems = [];
  dropdownSettings = {};
  editProfileForm: FormGroup;
  ngOnInit() {
    //console.log("In INIT Func "+Constants.API_ENDPOINT_1)
    this.buttonText="Add";
    this.appForm  =  this.formBuilder.group({
      food_item: ['', Validators.required],
      quantity:['',Validators.required],
      quantity_measure:['',Validators.required],
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

  this.editProfileForm = this.formBuilder.group({
    raw_weight:[''],
    weight_measure:[''],
    protein: [''],
    carbohydrates: [''],
    fat: [''],
    calorie: ['']
   });
  


  fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbankref')
  .then(result => result.json())
  .then(rowData => this.rowData = rowData); 


  fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbankr')
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
   // console.log(item);
    
    for (let d of this.dropdownList) {
        
      if(item.id == d.id){
       // console.log( ": " + JSON.stringify(d));
        this.characters.push(d);
      }
    }
    
  }
  OnItemDeSelect(item:any){
  //  console.log(item);
    var i=0;
    for (let d of this.characters) {
        
      if(item.id == d.id){
        console.log( ": " + JSON.stringify(d));
        this.characters.splice(i, 1);      }
      i++;
    }
}
  onSelectAll(items: any) {
    //console.log(items);
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
    this.delshow=false;
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

deleteData(){
 // console.log("Data is "+JSON.stringify(this.appForm.value));
  if(confirm('Are You Sure Want to Delete Food Item '+this.appForm.get("food_item").value)){
  //  console.log('In Delete Mode ');
    this.formControls.operation_type.setValue("delete");
    var delData={};
    delData["id"]=this.appForm.get("id").value;
    delData["food_item"]=this.appForm.get("food_item").value;
    var postData = 'myData=' + JSON.stringify(delData);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
    this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/delitemref", postData, options).subscribe(
      (t) => {
        alert('Data Deletion Success');
        this.rowData[this.rowIndex]=this.appForm.value;
        this.rowData.splice(this.rowIndex, 1);
    this.gridApi.setRowData(this.rowData);
    this.showModuleDiv=false;
      });
  }
}

addData(){
    
  //console.log("Data is "+JSON.stringify(this.appForm.value))
  //console.log("Data is "+JSON.stringify(this.characters))
  var fData={};
  fData["food_item"]=this.appForm.get("food_item").value;
  fData["quantity"]=this.appForm.get("quantity").value;
  fData["quantity_measure"]=this.appForm.get("quantity_measure").value;
  fData["item_ref"]=this.characters;
  if(this.buttonText=="Add")
  fData["opration_type"]="add";
  else if(this.buttonText=="Update"){
  fData["opration_type"]="update";
  fData["id"]=this.appForm.get("id").value;
}

 // console.log("Data is "+JSON.stringify(fData));
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
  this.formControls.quantity.setValue("");
  this.formControls.quantity_measure.setValue("");
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
    this.formControls.quantity.setValue("");
    this.formControls.quantity_measure.setValue("");
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
  this.delshow=true;
  this.showModuleDiv=true;
  this.rowIndex=event.rowIndex;
 this.characters= [];
 event.data.operation_type="update";
// this.selectedItems = [];
 //this.formControls.selectedItems.setValue([]);
 this.appForm.get("selectedItems").setValue([]);
 

 //console.log("Afer resetting "+JSON.stringify(this.appForm.get("selectedItems").value));

 var splitted = event.data.item_ref.split(",", -1); 
 this.formControls.food_item.setValue(event.data.food_item);
 this.formControls.quantity.setValue(event.data.quantity);
 this.formControls.quantity_measure.setValue(event.data.quantity_measure);
 //console.log("Ref Items == "+event.data.item_ref);
 //this.formControls.selectedItems.setValue(a);
 var a = [];

  for (let d of this.dropdownList) {
    if(splitted.indexOf(d.id) !== -1){
   
      var dropData={};
      dropData["id"]=d.id;
      dropData["food_item"]=d.food_item;
      var pdataArr=event.data.protein_data.split(",",-1);
      for(let p of pdataArr){
        if(p.split(":")[0]==d.id)
        d.protein=p.split(":")[1];
      }
      a.push(dropData);     
     
      this.characters.push(d);
    }
  }
  //console.log("A Setting "+JSON.stringify(a))
  this.sItems=a;
 this.formControls.selectedItems.setValue(a);
 //this.appForm.get("selectedItems").setValue(a);
this.appForm.get("id").setValue(event.data.id);
  this.buttonText="Update";
  this.buttonClass="btn btn-info";
}

 index=-1;
 rw:any;
 p:any;
 cbh:any;
 kc:any;
 f:any;
openModal(targetModal, user,index) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
 this.index=index;
 this.rw=user.raw_weight;
 this.p=user.protein;
 this.cbh=user.carbohydrates;
 this.f=user.fat;
 this.kc=user.calorie;
  this.editProfileForm.patchValue({
   protein: user.protein,
   carbohydrates: user.carbohydrates,
   fat: user.fat,
   calorie: user.calorie,
   raw_weight:user.raw_weight,
   weight_measure:user.weight_measure
  });
 } onSubmit() {
  this.modalService.dismissAll();
 // console.log("res:", this.editProfileForm.getRawValue());
  this.characters[this.index].protein=this.editProfileForm.get("protein").value
  this.characters[this.index].raw_weight=this.editProfileForm.get("raw_weight").value
  this.characters[this.index].carbohydrates=this.editProfileForm.get("carbohydrates").value
  this.characters[this.index].fat=this.editProfileForm.get("fat").value
  this.characters[this.index].calorie=this.editProfileForm.get("calorie").value
 }

 weightChange(){
   //console.log("Weight Change Called =="+this.rw+"=="+this.editProfileForm.get("raw_weight").value)
   var w=this.editProfileForm.get("raw_weight").value;
  // var p=this.editProfileForm.get("protein").value;
  // var cbh=this.editProfileForm.get("carbohydrates").value;
  // var f=this.editProfileForm.get("fat").value;
  // var kc=this.editProfileForm.get("calorie").value;
     var p1=this.toConvert((this.p/this.rw)*w);
     var cbh1=this.toConvert((this.cbh/this.rw)*w);
     var f1=this.toConvert((this.f/this.rw)*w);
     var c1=this.toConvert((this.kc/this.rw)*w);
     this.editProfileForm.get("protein").setValue(p1);
     this.editProfileForm.get("carbohydrates").setValue(cbh1);
     this.editProfileForm.get("fat").setValue(f1);
     this.editProfileForm.get("calorie").setValue(c1);
 }
 toConvert(num){
  return Math.round( num * 100 + Number.EPSILON ) / 100;
} 
}
