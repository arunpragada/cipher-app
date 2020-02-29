import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Constants } from '../../constants/constants'

@Component({
  selector: 'app-bmicalc',
  templateUrl: './bmicalc.component.html',
  styleUrls: ['./bmicalc.component.scss']
})
export class BmicalcComponent implements OnInit {

  appForm: FormGroup;
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
    gender:""
});
  }

  compute(){


var h=this.appForm.get("height").value;
var w=this.appForm.get("weight").value;

var hm=h/100;
var br=w/(hm*hm);
var brp=(Math.round(br * 100) / 100).toFixed(2);
this.bmiData.height=hm;
this.bmiData.weight=w;
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

  }

  toConvert(num){
    return Math.round( num * 100 + Number.EPSILON ) / 100;
  }
  heightCalc(){
    var h=this.appForm.get("height").value;
    console.log("H is "+h);
   // var f= this.toConvert(h*0.0328084);
   // var i=this.toConvert(h*0.393701);
    var realFeet = ((h*0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);   
    this.appForm.get("feet").setValue(feet);
    this.appForm.get("inches").setValue(inches);
  }
}
