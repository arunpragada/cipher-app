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

  
  columnDefs = [
    {headerName: 'Food Item', field: 'food_item'},
    {headerName: 'Quantity', field: 'quantity'},
    {headerName: 'Raw Weight', field: 'raw_weight'},
    {headerName: 'Protein', field: 'protein'},
    {headerName: 'Carbohydrates', field: 'carbohydrates'},   
    {headerName: 'Fat', field: 'fat'},
    {headerName: 'Calories', field: 'calorie'}, 
];

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
    console.log("In INIT Func "+Constants.API_ENDPOINT_1)
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
      location_preference: ['', Validators.required],
      is_ref:"0",
      operation_type:"",
      id:"0"
  });
  fetch(Constants.API_ENDPOINT+'/CommonCtrl.php/getcalbankref')
  .then(result => result.json())
  .then(rowData => this.rowData = rowData); 

  }


  get formControls() { return this.appForm.controls; }

  onGridReady(params) {
    this.gridApi = params.api; // To access the grids API
  }
  enableModuleDiv(){
    this.showModuleDiv=true;
this.formControls.module_name.setValue("");
this.formControls.support_notes.setValue("");
this.buttonText="Add";
this.buttonClass="btn btn-success";
  }
  quickSearchValue: string = '';
  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(this.quickSearchValue);
}
}
