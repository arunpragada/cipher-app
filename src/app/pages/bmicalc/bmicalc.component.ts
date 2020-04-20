import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../../constants/constants'
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-bmicalc',
  templateUrl: './bmicalc.component.html',
  styleUrls: ['./bmicalc.component.scss']
})
export class BmicalcComponent implements OnInit {

  appForm: FormGroup;
  chartIds: any[];
  public summary = new Map<string, string>(); 
  public advices = new Map<string, string>(); 
  public fta = new Map<string, string>(); 
  public pa = new Map<string, string>(); 
  public diet = new Map<string, string>(); 
  public diet_data = new Map<string, string>(); 
  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  public bmiData: any={umr:"",name:"",age:"",height:"",inches:"",feet:"",weight:"",gender:"",
bmi_result:"",ideal_bmi:"23",req_weight:"",req_weight_change:"",change_percent:"",ideal_cal_weight:"25",
total_req_cal:"",req_pro_15:"",req_pro_12:"",req_pro_10:""};
public rec_diet:any=[{"cal":"","protein":"","ch":"","fat":"","protein_g":"","ch_g":"","fat_g":""},{"cal":"","protein":"","ch":"","fat":"","protein_g":"","ch_g":"","fat_g":""},{"cal":"","protein":"","ch":"","fat":"","protein_g":"","ch_g":"","fat_g":""}];
//"cal":"","protein":"","ch":"","fat":"","protein_g":"","ch_g":"","fat_g":""
  ngOnInit() {
    
  this.appForm  =  this.formBuilder.group({
    umr: ['', Validators.required],
    name: ['', Validators.required],
    age:"",
    height:"",
    inches:"",
    feet:"",
    weight:"",
    gender:"",
    previous_chart_id:""
});

let d: any =JSON.parse(sessionStorage.getItem('bmidata'));
let r: any =JSON.parse(sessionStorage.getItem('recdata'));

/*fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getdietchart?umr=ABCD')
.then(result => result.json())
.then(rowData => {
  this.bmiData=JSON.parse(rowData[0].bmi_data);
  this.rec_diet=JSON.parse(rowData[0].rec_diet_allowances);
  //this.bmiData=d;
  console.log("Result Data "+JSON.stringify(JSON.parse(rowData[0].bmi_data))) 
  
}); */

//console.log("D=="+d);
if(d!==null && d!==undefined){
  
this.bmiData=d;
this.appForm.get("height").setValue(d.height);
this.appForm.get("weight").setValue(d.weight);
this.appForm.get("feet").setValue(d.feet);
this.appForm.get("inches").setValue(d.inches);
this.appForm.get("umr").setValue(d.umr);
this.appForm.get("name").setValue(d.name);
this.appForm.get("age").setValue(d.age);
this.appForm.get("gender").setValue(d.gender);
  }
  if(r!=null){
    this.rec_diet=r;
  }
//console.log("Data Constr=="+JSON.stringify(d));
//sessionStorage.removeItem('bmidata');
  }

  compute(){


var h=this.appForm.get("height").value;
var w=this.appForm.get("weight").value;
var f=this.appForm.get("feet").value;
var i=this.appForm.get("inches").value;
this.bmiData.umr=this.appForm.get("umr").value;
this.bmiData.name=this.appForm.get("name").value;
this.bmiData.age=this.appForm.get("age").value;
this.bmiData.gender=this.appForm.get("gender").value;


var hm=h/100;
var br=w/(hm*hm);
var brp=(Math.round(br * 100) / 100).toFixed(2);
this.bmiData.height=hm;
this.bmiData.weight=w;
this.bmiData.feet=f;
this.bmiData.inches=i;
this.bmiData.bmi_result=brp;
this.bmiData.req_weight=this.toConvert(this.bmiData.ideal_bmi*this.bmiData.height*this.bmiData.height);

this.bmiData.req_weight_change=this.toConvert(this.bmiData.req_weight-this.bmiData.weight);
this.bmiData.change_percent=this.toConvert(this.bmiData.req_weight_change/this.bmiData.weight);
this.bmiData.total_req_cal=this.toConvert(this.bmiData.req_weight*this.bmiData.ideal_cal_weight);
this.bmiData.req_pro_15=this.toConvert(this.bmiData.req_weight*1.5);
this.bmiData.req_pro_12=this.toConvert(this.bmiData.req_weight*1.2);
this.bmiData.req_pro_10=this.toConvert(this.bmiData.req_weight*1.0);
this.rec_diet[0].cal=this.bmiData.total_req_cal*50/100;
this.rec_diet[1].cal=this.bmiData.total_req_cal*75/100;
this.rec_diet[2].cal=this.bmiData.total_req_cal;

this.rec_diet[0].protein=this.toConvert(this.rec_diet[0].cal*0.2)
this.rec_diet[0].protein_g=this.toConvert(this.rec_diet[0].protein/4)
this.rec_diet[1].protein=this.toConvert(this.rec_diet[1].cal*0.2)
this.rec_diet[1].protein_g=this.toConvert(this.rec_diet[1].protein/4)
this.rec_diet[2].protein=this.toConvert(this.rec_diet[2].cal*0.2)
this.rec_diet[2].protein_g=this.toConvert(this.rec_diet[2].protein/4)


this.rec_diet[0].ch=this.toConvert(this.rec_diet[0].cal*0.6)
this.rec_diet[0].ch_g=this.toConvert(this.rec_diet[0].ch/4)
this.rec_diet[1].ch=this.toConvert(this.rec_diet[1].cal*0.6)
this.rec_diet[1].ch_g=this.toConvert(this.rec_diet[1].ch/4)
this.rec_diet[2].ch=this.toConvert(this.rec_diet[2].cal*0.6)
this.rec_diet[2].ch_g=this.toConvert(this.rec_diet[2].ch/4)



this.rec_diet[0].fat=this.toConvert(this.rec_diet[0].cal*0.2)
this.rec_diet[0].fat_g=this.toConvert(Math.round(this.rec_diet[0].fat/9).toFixed(2));
this.rec_diet[1].fat=this.toConvert(this.rec_diet[1].cal*0.2)
this.rec_diet[1].fat_g=this.toConvert(Math.round(this.rec_diet[1].fat/9).toFixed(2));
this.rec_diet[2].fat=this.toConvert(this.rec_diet[2].cal*0.2)
this.rec_diet[2].fat_g=this.toConvert(Math.round(this.rec_diet[2].fat/9).toFixed(2));
this.bmiData.height=h;
sessionStorage.setItem('bmidata', JSON.stringify(this.bmiData));
sessionStorage.setItem('recdata', JSON.stringify(this.rec_diet));

  }

  toConvert(num){
    return Math.round( num * 100 + Number.EPSILON ) / 100;
  }
  heightCalc(){
    var h=this.appForm.get("height").value;
    //console.log("H is "+h);
   // var f= this.toConvert(h*0.0328084);
   // var i=this.toConvert(h*0.393701);
    var realFeet = ((h*0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);   
    this.appForm.get("feet").setValue(feet);
    this.appForm.get("inches").setValue(inches);
  }
  getDataByUMR(){
    var data={}
    data["umr"]=this.appForm.get("umr").value;
   
    var postData = 'myData=' + JSON.stringify(data);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},Accept: "application/json",responseType: 'blob'};
    this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/getchartsbyumr", postData, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',Accept: "application/json"},
      responseType: 'json',
     
    }).subscribe(
      (t:any) => {
        //console.log(JSON.stringify(t));
        this.chartIds=t;
        //console.log(JSON.stringify(this.chartIds));
        if(this.chartIds.length>0)
        alertify.alert("Success","Data Found and Populated in Previous Charts");
        else
        alertify.alert("No Data","Previous Data Not Found for UMR");
        
      });
  }
  getDataByUMRKey(){
    
    var data={}
    data["umr_key"]=this.appForm.get("previous_chart_id").value;
   
    var postData = 'myData=' + JSON.stringify(data);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},Accept: "application/json",responseType: 'blob'};
    this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/getdietchart", postData, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',Accept: "application/json"},
      responseType: 'json',
     
    }).subscribe(
      (t:any) => {
      //  console.log(JSON.stringify(t));
        if(t!=null && t!=undefined && t!=""){
          this.bmiData=JSON.parse(t[0].bmi_data);
          this.rec_diet=JSON.parse(t[0].rec_diet_allowances);
          this.summary=JSON.parse(t[0].summary_diet_data);
          this.advices=JSON.parse(t[0].diet_advice);
          this.fta=JSON.parse(t[0].food_avoided);
          this.pa=JSON.parse(t[0].physical_activity);
          this.appForm.get("height").setValue(this.bmiData.height);
          this.appForm.get("weight").setValue(this.bmiData.weight);
        this.appForm.get("feet").setValue(this.bmiData.feet);
      this.appForm.get("inches").setValue(this.bmiData.inches);
      this.appForm.get("umr").setValue(this.bmiData.umr);
      this.appForm.get("name").setValue(this.bmiData.name);
    this.appForm.get("age").setValue(this.bmiData.age);
    this.appForm.get("gender").setValue(this.bmiData.gender);
    sessionStorage.setItem('bmidata',JSON.stringify(this.bmiData))
    sessionStorage.setItem('recdata',JSON.stringify(this.rec_diet))
   
    sessionStorage.setItem('summary',JSON.stringify(JSON.parse(t[0].summary_diet_data)))
    sessionStorage.setItem('advices',JSON.stringify(this.advices))
    sessionStorage.setItem('fta',JSON.stringify(this.fta))
    sessionStorage.setItem('pa',JSON.stringify(this.pa))
    sessionStorage.setItem('note',t[0].diet_chart_note)
    sessionStorage.setItem('finalnote',t[0].note)
    this.diet=JSON.parse(t[0].diet_data);
    //sessionStorage.setItem('diet',JSON.stringify(this.diet))
   // console.log("FF"+this.diet["r0o4r2c13"]);
    for (let [key, value] of Object.entries(this.diet)){
       this.diet_data.set(key,value);
    }
     
    sessionStorage.setItem("diet",JSON.stringify(Array.from(this.diet_data.entries())));
//JSON.stringify(Array.from(this.a.entries()))
//new Map(JSON.parse(sessionStorage.getItem('diet')));
        alertify.alert("Success","Data Population Success");
      }
        
      });

  }
}
