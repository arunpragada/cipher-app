import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../../constants/constants';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-calbank',
  templateUrl: './calbank.component.html',
  styleUrls: ['./calbank.component.scss']
})
export class CalbankComponent implements OnInit {

  rowData: any[];
  appForm: FormGroup;
  showModuleDiv= false;
  buttonText="Add";
  buttonClass="btn btn-success";
  private gridApi;
  rowIndex=0;
  delshow:boolean =false
  
  columnDefs = [
    {headerName: 'Food Item', field: 'food_item'},
    {headerName: 'Quantity',  valueGetter: function(params) {
      return params.data.quantity +' '+params.data.quantity_measure ;
  }},
    {headerName: 'Raw Weight', valueGetter: function(params) {
      return params.data.raw_weight +' '+params.data.weight_measure ;
  }},
    {headerName: 'Protein(g)', field: 'protein'},
    {headerName: 'Carbohydrates(g)', field: 'carbohydrates'},   
    {headerName: 'Fat(g)', field: 'fat'},
    {headerName: 'Calories(K.Cal)', field: 'calorie'}, 
];

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
   // console.log("In INIT Func "+Constants.API_ENDPOINT_1)
    this.buttonText="Add";
    this.appForm  =  this.formBuilder.group({
      food_item: ['', Validators.required],
      quantity: ['', Validators.required],
      quantity_measure: ['', Validators.required],
      raw_weight: ['', Validators.required],
      weight_measure: ['', Validators.required],
      protein: ['', Validators.required],
      carbohydrates: ['', Validators.required],
      fat: ['', Validators.required],
      calorie: ['', Validators.required],
      fiber: ['', Validators.required],
      category: ['', Validators.required],
      food_type: ['', Validators.required],
      location_preference_n: [0, Validators.required],
      location_preference_s: [0, Validators.required],
      is_ref_n:[false, Validators.required],
      is_ref_y: [false, Validators.required],
      operation_type:"",
      id:"0",
      is_ref:0
  });
  fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbank')
  .then(result => result.json())
  .then(rowData => this.rowData = rowData); 

  }


  get formControls() { return this.appForm.controls; }

  onGridReady(params) {
    this.gridApi = params.api; // To access the grids API
  }
  enableModuleDiv(){
    this.delshow=false;
    this.showModuleDiv=true;
this.buttonText="Add";
this.buttonClass="btn btn-success";
this.appForm.reset(this.appForm.value);
this.appForm.reset();
this.formControls.is_ref_y.setValue(false);
this.formControls.is_ref_n.setValue(true);

  }
  quickSearchValue: string = '';
  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(this.quickSearchValue);
}
cclick(val){
  
  if(val=='y'){
    if(!this.appForm.get("is_ref_y").value)
    this.formControls.is_ref_n.setValue(false);
}
  if(val=='n'){
  if(!this.appForm.get("is_ref_n").value)
  this.formControls.is_ref_y.setValue(false);
}
  
}

deleteData(){
  //console.log("Data is "+JSON.stringify(this.appForm.value));
  if(confirm('Are You Sure Want to Delete Food Item '+this.appForm.get("food_item").value)){
   // console.log('In Delete Mode ');
    this.formControls.operation_type.setValue("delete");
    var delData={};
    delData["id"]=this.appForm.get("id").value;
    delData["food_item"]=this.appForm.get("food_item").value;
    var postData = 'myData=' + JSON.stringify(delData);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
    this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/delitem", postData, options).subscribe(
      (t) => {
        alertify.alert("Success","Deletion Operation Success..");
        this.rowData[this.rowIndex]=this.appForm.value;
        this.rowData.splice(this.rowIndex, 1);
    this.gridApi.setRowData(this.rowData);
    this.showModuleDiv=false;
      });
  }
}

addData(){
    
  if(this.buttonText=="Add")
  this.formControls.operation_type.setValue("add");
  else if(this.buttonText=="Update")
  this.formControls.operation_type.setValue("update");
  
  //console.log("Data is "+JSON.stringify(this.appForm.value))
  //console.log("Data +"+this.formControls.is_ref_y)
  if(this.appForm.get("is_ref_y").value)
  this.formControls.is_ref.setValue(1);
  else
  this.formControls.is_ref.setValue(0);
  if(this.appForm.get("location_preference_n").value)
  this.formControls.location_preference_n.setValue(1);
  if(this.appForm.get("location_preference_s").value)
  this.formControls.location_preference_s.setValue(1);
  if(!this.appForm.get("location_preference_n").value)
  this.formControls.location_preference_n.setValue(0);
  if(!this.appForm.get("location_preference_s").value)
  this.formControls.location_preference_s.setValue(0);
  
  var postData = 'myData=' + JSON.stringify(this.appForm.value);
  const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/additem", postData, options).subscribe(
  (t) => {console.log(t+"=="+this.buttonText);
    if(this.buttonText === "Add"){
    this.formControls.id.setValue(t);
    this.rowData.push(this.appForm.value);
    this.gridApi.setRowData(this.rowData);
    this.appForm.reset();
  }else if(this.buttonText=="Update"){
   // console.log("Row Index "+this.rowIndex)   
    this.rowData[this.rowIndex]=this.appForm.value;
   // console.log("AA "+JSON.stringify(this.rowData[0]));
  //  this.gridApi.getSelectedRows()[0].module_name=this.appForm.get("module_name").value;
    this.gridApi.setRowData(this.rowData);
  }
  }
);

//alert(this.buttonText+" Operation Success..");
alertify.alert("Success",this.buttonText+" Operation Success..");

}
onRowClicked(event: any) { 
  this.delshow=true;
  this.showModuleDiv=true;
  this.rowIndex=event.rowIndex;
  if(event.data.is_ref=="1"){
  event.data.is_ref_y=true;
  event.data.is_ref_n=false;}else{
    event.data.is_ref_y=false;
  event.data.is_ref_n=true;
  }
 if(event.data.location_preference_n=="1")
 event.data.location_preference_n=1;
 else
 event.data.location_preference_n=0;
 if(event.data.location_preference_s=="1")
 event.data.location_preference_s=1;
 else
 event.data.location_preference_s=0;
 event.data.operation_type="update";
  event.data
  this.appForm.setValue(event.data);
  //this.formControls.module_name.setValue(event.data.module_name);
  //this.formControls.support_notes.setValue(event.data.support_notes);
 // this.formControls.module_key.setValue(event.data.module_key);
 // console.log('row', event);     
  this.buttonText="Update";
  this.buttonClass="btn btn-info";
}





}
