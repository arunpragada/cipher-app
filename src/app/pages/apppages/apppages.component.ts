import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../../constants/constants'


@Component({
  selector: 'app-apppages',
  templateUrl: './apppages.component.html',
  styleUrls: ['./apppages.component.scss']
})
export class ApppagesComponent implements OnInit {

  rowData: any[];
  appForm: FormGroup;
  showModuleDiv= false;
  buttonText="Add";
  buttonClass="btn btn-success";
  private gridApi;

  columnDefs = [
    {headerName: 'Module Name', field: 'module_name'},
    {headerName: 'Notes', field: 'support_notes'},
    {headerName: 'Created On', field: 'creation_date'},
    {headerName: 'Created By', field: 'created_by'}    
];

constructor(private formBuilder: FormBuilder,private http: HttpClient) {} 

ngOnInit() {
  console.log("In INIT Func "+Constants.API_ENDPOINT)
  this.buttonText="Add";
  this.appForm  =  this.formBuilder.group({
    module_name: ['', Validators.required],
    support_notes: ['', Validators.required],
    operation_type:"",
    module_key:"0"
});
    fetch(Constants.API_ENDPOINT+'/admin_ctrl.php/getallmodules')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);     
  }
  
  get formControls() { return this.appForm.controls; }

  onRowClicked(event: any) { 
    this.showModuleDiv=true;
    this.formControls.module_name.setValue(event.data.module_name);
    this.formControls.support_notes.setValue(event.data.support_notes);
    this.formControls.module_key.setValue(event.data.module_key);
    console.log('row', event);     
    this.buttonText="Update";
    this.buttonClass="btn btn-info";
  }
  onGridReady(params) {
    this.gridApi = params.api; // To access the grids API
  }
  addData(){
    
    if(this.buttonText=="Add")
    this.formControls.operation_type.setValue("add");
    else if(this.buttonText=="Update")
    this.formControls.operation_type.setValue("update");
    
    console.log("Data is "+JSON.stringify(this.appForm.value))
    
    var postData = 'myData=' + JSON.stringify(this.appForm.value);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
this.http.post(Constants.API_ENDPOINT+"/admin_ctrl.php/addmodule", postData, options).subscribe(
    (t) => {console.log(t);
      if(this.buttonText=="Add"){
      this.formControls.module_key.setValue(t);
      this.rowData.push(this.appForm.value);
      this.gridApi.setRowData(this.rowData);
      this.appForm.reset;
    }else if(this.buttonText=="Update"){
     // this.gridApi.getSelectedRows()[0]=this.appModuleForm.value;
      this.gridApi.getSelectedRows()[0].module_name=this.appForm.get("module_name").value;
      this.gridApi.setRowData(this.rowData);
    }
    }
);

alert(this.buttonText+" Operation Success..");

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
