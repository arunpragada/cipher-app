import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../../constants/constants'

@Component({
  selector: 'app-approles',
  templateUrl: './approles.component.html',
  styleUrls: ['./approles.component.scss']
})
export class ApprolesComponent implements OnInit {

  rowData: any[];
  appForm: FormGroup;
  showModuleDiv= false;
  buttonText="Add";
  buttonClass="btn btn-success";
  private gridApi;
  modulesData: any[];

  columnDefs = [
    {headerName: 'Role Name', field: 'role_name'},
    {headerName: 'Notes', field: 'support_notes'},
    {headerName: 'Created On', field: 'creation_date'},
    {headerName: 'Created By', field: 'created_by'}    
];

constructor(private formBuilder: FormBuilder,private http: HttpClient) {} 

ngOnInit() {
  console.log("In INIT Func "+Constants.API_ENDPOINT)
  this.buttonText="Add";
  this.appForm  =  this.formBuilder.group({
    role_name: ['', Validators.required],
    support_notes: ['', Validators.required],
    operation_type:"",
    role_key:"0",
    association:[]
});
    fetch(Constants.API_ENDPOINT+'/admin_ctrl.php/getallroles')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
      
      fetch(Constants.API_ENDPOINT+'/admin_ctrl.php/getmodulesforroles')
      .then(result => result.json())
      .then(data => {this.modulesData = data
      // console.log("Modules "+JSON.stringify(data)); 
      });
      
  }
  
  get formControls() { return this.appForm.controls; }

  onRowClicked(event: any) { 
    this.showModuleDiv=true;
    this.formControls.role_name.setValue(event.data.role_name);
    this.formControls.support_notes.setValue(event.data.support_notes);
    this.formControls.role_key.setValue(event.data.role_key);
    console.log('row', event);     
    this.buttonText="Update";
    this.buttonClass="btn btn-info";
    this.modulesData.filter(x=>{
      if(x.checked==1)
          x.checked=0;
      });
    this.http.get(Constants.API_ENDPOINT+"/admin_ctrl.php/getrolemodules?rkey="+event.data.role_key).subscribe(
        (t) => {//console.log("From Role Modules "+JSON.stringify(t));
      /*  const arr: any[] = Object.values(t);
        for(let d of arr){
          console.log("Each 11"+JSON.stringify(d));
          
            this.modulesData.filter(x=>x.module_key==d.module_key)[0].checked=1;
          
        }*/
        //console.log("Refresh "+JSON.stringify(this.modulesData))
        }
    );


  }
  onGridReady(params) {
    this.gridApi = params.api; // To access the grids API
  }
  addData(){
    
    if(this.buttonText=="Add")
    this.formControls.operation_type.setValue("add");
    else if(this.buttonText=="Update")
    this.formControls.operation_type.setValue("update");
    this.formControls.association.setValue(this.modulesData.filter(x=>x.checked==1));

    console.log("Data is "+JSON.stringify(this.appForm.value))
    
    var postData = 'myData=' + JSON.stringify(this.appForm.value);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
this.http.post(Constants.API_ENDPOINT+"/admin_ctrl.php/addrole", postData, options).subscribe(
    (t) => {console.log(t);
      if(this.buttonText=="Add"){
      this.formControls.role_key.setValue(t);
      this.rowData.push(this.appForm.value);
      this.gridApi.setRowData(this.rowData);
      this.appForm.reset;
    }else if(this.buttonText=="Update"){
      this.gridApi.getSelectedRows()[0].role_name=this.appForm.get("role_name").value;
      this.gridApi.getSelectedRows()[0].support_notes=this.appForm.get("support_notes").value;
      this.gridApi.setRowData(this.rowData);
    }
    }
);

alert(this.buttonText+" Operation Success..");

  }
  enableModuleDiv(){
    this.showModuleDiv=true;
this.formControls.role_name.setValue("");
this.formControls.support_notes.setValue("");
this.modulesData.filter(x=>{
  if(x.checked==1)
      x.checked=0;
  });
this.buttonText="Add";
this.buttonClass="btn btn-success";
  }
  chkboxHandle(m){
   // alert('In Checkc Box'+m.checked)
    if(m.checked)
      m.checked=0;
      else
      m.checked=1;
  }
  quickSearchValue: string = '';
  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(this.quickSearchValue);
}

}
