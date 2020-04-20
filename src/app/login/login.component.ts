import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../constants/constants'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    
})
export class LoginComponent implements OnInit {

    appForm: FormGroup;
    loginName:string="Log In";
    res:any;
    message:string='';
    constructor(
      public router: Router,private formBuilder: FormBuilder,private http: HttpClient
    ) {}

    ngOnInit() {

        this.appForm  =  this.formBuilder.group({
            usrname: ['', Validators.required],
            pwd: ['', Validators.required]
                    });
    }
    get formControls() { return this.appForm.controls; }
    onLoggedin() {
        console.log('User is '+JSON.stringify(this.appForm.value));        
        
      var postData = 'myData=' + JSON.stringify(this.appForm.value);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
this.http.post(Constants.API_ENDPOINT_1+"/admin_ctrl.php/checkuser", postData, options).subscribe(
    (t) => {console.log(t);
        this.res=t;
        //console.log("Val="+this.res)
    if(this.res.operation === "Y"){
         console.log('Login success==')
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('userData',JSON.stringify(this.res))
        this.router.navigate(['/bmicalc']);
    }else{
        console.log('Login Fail==')
        this.message="User/Password Wrong.";
    }
    
    }
)
};
    
    
}
