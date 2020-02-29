import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../../constants/constants'

@Component({
  selector: 'app-appusers',
  templateUrl: './appusers.component.html',
  styleUrls: ['./appusers.component.scss']
})
export class AppusersComponent implements OnInit {
  rowData: any[];
  appForm: FormGroup;
  showModuleDiv= false;
  buttonText="Add";
  buttonClass="btn btn-success";
  private gridApi;
  rolesData: any[];
  quickSearchValue: string ="";
  columnDefs = [
    {headerName: 'Email', field: 'usr_email'},
    {headerName: 'Password', field: 'password'},
    {headerName: 'Status', field: 'usr_status'},
    {headerName: 'First Name', field: 'first_name'},
    {headerName: 'Last Name', field: 'last_name'},
    {headerName: 'Mobile', field: 'phone_number'},
    {headerName: 'City', field: 'city'},
    {headerName: 'Created On', field: 'creation_date'}                
];

constructor(private formBuilder: FormBuilder,private http: HttpClient) {} 

ngOnInit() {
  console.log("In INIT Func "+Constants.API_ENDPOINT)
  this.buttonText="Add";
  this.appForm  =  this.formBuilder.group({
    usr_email: ['', Validators.required],
    password: ['', Validators.required],
    usr_status: ['', Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    phone_number: ['', Validators.required],
    city: ['', Validators.required],
    operation_type:"",
    usr_key:"0",
    association:[]
});
    fetch(Constants.API_ENDPOINT_1+'/admin_ctrl.php/getallusers')
      .then(result => result.json())
      .then(rowData => this.rowData = rowData);
      
      fetch(Constants.API_ENDPOINT_1+'/admin_ctrl.php/getrolesforusers')
      .then(result => result.json())
      .then(data => {this.rolesData = data
      // console.log("Modules "+JSON.stringify(data)); 
      });
      
  }
  
  get formControls() { return this.appForm.controls; }

  onRowClicked(event: any) { 
    this.showModuleDiv=true;
    this.formControls.usr_email.setValue(event.data.usr_email);
    this.formControls.password.setValue(event.data.password);
    this.formControls.usr_status.setValue(event.data.usr_status);
    this.formControls.first_name.setValue(event.data.first_name);
    this.formControls.last_name.setValue(event.data.last_name);
    this.formControls.phone_number.setValue(event.data.phone_number);
    this.formControls.city.setValue(event.data.city);
    this.formControls.usr_key.setValue(event.data.usr_key);
    console.log('row', event);     
    this.buttonText="Update";
    this.buttonClass="btn btn-info";
    this.rolesData.filter(x=>{
      if(x.checked==1)
          x.checked=0;
      });
    this.http.get(Constants.API_ENDPOINT_1+"/admin_ctrl.php/getuserroles?ukey="+event.data.usr_key).subscribe(
        (t) => {//console.log("From Role Modules "+JSON.stringify(t));
      /*  const arr: any[] = Object.values(t);
        for(let d of arr){
          console.log("Each 11"+JSON.stringify(d));
          
            this.rolesData.filter(x=>x.role_key==d.role_key)[0].checked=1;
          
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
    this.formControls.association.setValue(this.rolesData.filter(x=>x.checked==1));

    console.log("Data is "+JSON.stringify(this.appForm.value))
    
    var postData = 'myData=' + JSON.stringify(this.appForm.value);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
this.http.post(Constants.API_ENDPOINT_1+"/admin_ctrl.php/adduser", postData, options).subscribe(
    (t) => {console.log(t);
      if(this.buttonText=="Add"){
      this.formControls.usr_key.setValue(t);
      this.rowData.push(this.appForm.value);
      this.gridApi.setRowData(this.rowData);
      this.appForm.reset;
    }else if(this.buttonText=="Update"){
      this.gridApi.getSelectedRows()[0].usr_email=this.appForm.get("usr_email").value;
      this.gridApi.getSelectedRows()[0].first_name=this.appForm.get("first_name").value;
      this.gridApi.getSelectedRows()[0].last_name=this.appForm.get("last_name").value;
      this.gridApi.getSelectedRows()[0].usr_status=this.appForm.get("usr_status").value;
      this.gridApi.getSelectedRows()[0].password=this.appForm.get("password").value;
      this.gridApi.getSelectedRows()[0].phone_number=this.appForm.get("phone_number").value;
      this.gridApi.getSelectedRows()[0].city=this.appForm.get("city").value;
      this.gridApi.setRowData(this.rowData);
    }
    }
);

alert(this.buttonText+" Operation Success..");

  }
  enableModuleDiv(){
    this.showModuleDiv=true;
this.formControls.usr_email.setValue("");
this.formControls.first_name.setValue("");
this.formControls.last_name.setValue("");
this.formControls.usr_status.setValue("");
this.formControls.password.setValue("");
this.formControls.phone_number.setValue("");
this.formControls.city.setValue("");
this.rolesData.filter(x=>{
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
  
  onQuickFilterChanged() {
    this.gridApi.setQuickFilter(this.quickSearchValue);
}

}
