import { Component, OnInit } from '@angular/core';
import { DatePipe  } from '@angular/common';
import { HttpClient, HttpRequest } from '@angular/common/http';
import {Constants } from '../../constants/constants';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-dietchartout',
  templateUrl: './dietchartout.component.html',
  styleUrls: ['./dietchartout.component.scss'],
  providers: [DatePipe]
})
export class DietchartoutComponent implements OnInit {

  public bmiData: any={umr:"",name:"",age:"",height:"",inches:"",feet:"",weight:"",gender:"",
  bmi_result:"",ideal_bmi:"23",req_weight:"",req_weight_change:"",change_percent:"",ideal_cal_weight:"25",
  total_req_cal:"",req_pro_15:"",req_pro_12:"",req_pro_10:""};
  public a = new Map<string, string>(); 
  public summary = new Map<string, string>(); 
  public operation_type="add";
  public rec_diet:any=[{"cal":"","protein":"","ch":"","fat":"","protein_g":"","ch_g":"","fat_g":""},{"cal":"","protein":"","ch":"","fat":"","protein_g":"","ch_g":"","fat_g":""},{"cal":"","protein":"","ch":"","fat":"","protein_g":"","ch_g":"","fat_g":""}];
  public note ="This diet chart has been devised based on the standard protocols. Any exclusions of foods from the prescribed chart is based on patients discretion."
  public finalnote ="Always follow a nutritionally balanced diet customized by a nutritionist based on your current health condition."
  public advice = new Map<string, string>();
  public fta = new Map<string, string>();
  public pa = new Map<string, string>();
  public dietChartTypes: any[]=[{heading:'Early-Morning',time:'07:00 AM - 07:30 AM'},{heading:'Breakfast',time:'08:00 AM - 08:30 AM'},
  {heading:'Mid-Morning',time:'10:00 AM - 10:30 AM'},{heading:'Lunch',time:'01:00 PM - 01:30 PM'},{heading:'Snaks',time:'04:00 PM - 04:30 PM'},
  {heading:'Dinner',time:'07:00 PM - 07:30 PM'},{heading:'Bedtime',time:'08:00 PM - 08:30 PM'}];
  myDate = new Date()+"";
  arrayOne(n: number): any[] {
    return Array(n);
  }

  constructor(private datePipe: DatePipe,private http: HttpClient) {
    this.myDate=this.datePipe.transform(this.myDate, 'dd/MM/yyyy');
    
   }
  height="";
  ngOnInit() {
    let d: any =JSON.parse(sessionStorage.getItem('bmidata'));
    if(d!=null)
    this.bmiData=d;
    let diet: any =new Map(JSON.parse(sessionStorage.getItem('diet')));
    if(diet != null)
    this.a=diet;
    let summary: any =JSON.parse(sessionStorage.getItem('summary'));
    if(summary != null)
    this.summary=summary;
    let r: any =JSON.parse(sessionStorage.getItem('recdata'));
    let advices: any =JSON.parse(sessionStorage.getItem('advices'));
    let fta: any =JSON.parse(sessionStorage.getItem('fta'));
    let pa: any =JSON.parse(sessionStorage.getItem('pa'));
    if(r!=null){
      this.rec_diet=r;
    }
    if(advices!=null){
      this.advice=advices;
    }else
    this.getAdvices();
    if(fta!=null){
      this.fta=fta;
    }
    if(pa!=null){
      this.pa=pa;
    }
    
  }
  getAdvices(){
    this.advice["ad1"]="1) Eat small and frequent meals."
    this.advice["ad2"]="2) Follow a split meal pattern."
    this.advice["ad3"]="3) Start your day with a positive mind and ensure a 6-8 hours of undisturbed sleep daily."
    this.advice["ad4"]="4) Keep a track of your food intake by maintaining a food diary."
    this.advice["ad5"]="5) Mention your concerns to your nutritionist in every follow up."
    this.advice["ad6"]="6) Use herbs and spices to enhance the flavour of food."
    this.advice["ad7"]="7) Monitor your weight every week."
    this.advice["ad8"]="8) Drink plenty of liquids until restricted."
    this.advice["ad9"]="9) Drink at evenly spaced intervals and not in one go."
    this.advice["ad10"]="10) Avoid deep fried foods, ghee and butter."
    this.advice["ad11"]="11) Use not more than 4 teaspoons of sugar daily."
    this.advice["ad12"]="12) Eat slowly and chew properly unless there is a chewing difficulty."
    this.advice["ad13"]="13) Include omega-3 rich foods in your diet."
    this.advice["ad14"]="14) if prescribed in the diet finish your soup and salad first and then eat your meals."
    this.advice["ad15"]="15) Fresh fruits and salad should be peeled and eaten immediately. Do not store and eat later."
    this.advice["ad16"]=""
    this.advice["ad17"]=""
    this.advice["ad18"]=""

    this.fta["fta1"]="1) Cut down all carbonated and sugary drinks."
    this.fta["fta2"]="2) Avoid preservatives and foods cooked in reused oil."
    this.fta["fta3"]="3) Avoid outside foods."
    this.fta["fta4"]="4) Refined cereals , bakery items should be avoided."
    this.fta["fta5"]="5) Few foods advised by the nutritionist to not be taken."
    this.fta["fta6"]=""
    this.fta["fta7"]=""
    this.fta["fta8"]=""

    this.pa["pa1"]="1) Short walks after meals."
    this.pa["pa2"]="2) Do not exercise on an empty stomach or just right after meals."
    this.pa["pa3"]="3) Adhere to the physical activity guided by the health professional."
    this.pa["pa4"]=""
    this.pa["pa5"]=""
    this.pa["pa6"]=""
   

  }
  saveData(){
    //alert("Im In save Data")
    this.setSessionData();
    //console.log("In Save=="+JSON.stringify(this.bmiData))
    let jsonObject = {};
this.a.forEach((value, key) => {
    jsonObject[key] = value
});
var saveData={};
    
saveData["umr"]=this.bmiData.umr;
saveData["bmi_data"]=JSON.stringify(this.bmiData);
saveData["diet_data"]=JSON.stringify(jsonObject);
saveData["summary_diet_data"]=JSON.stringify(this.summary);
saveData["rec_diet_allowances"]=JSON.stringify(this.rec_diet);
saveData["diet_chart_note"]=this.note;
saveData["diet_advice"]=JSON.stringify(this.advice);
saveData["food_avoided"]=JSON.stringify(this.fta);
saveData["physical_activity"]=JSON.stringify(this.pa);
saveData["note"]=this.finalnote;
saveData["operation_type"]=this.operation_type;

    var postData = 'myData=' + JSON.stringify(saveData);
    const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}};
    this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/dietadd", postData, options).subscribe(
     
      (t) => {
        
        //console.log("Res "+t);
        
        if(t=="exists"){
         // alert('Data Already Exists');
                   if(confirm('Data Exists with today date.Are You Want to Update Chart Data ')){
           // console.log('In Update Mode ');
          //  this.operation_type="update";

            this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/dietadd", postData, options).subscribe(
              (t) => {
                alert('Diet Chart Update Success');
              });        
            
          }

        }else
        alert('Diet Chart Add Success');
       
      });

    //console.log("In Save=="+JSON.stringify(Array.from(this.a.entries())))
   /* let jsonObject = { "one": "value1", "two": "value2", "three": "value3" };
let map = new Map<string, string>()
for (var value in jsonObject) {
    map.set(value,jsonObject[value])
    }
console.log("map:" + map.size);*/
  }

printData(){
 // alert("Im in print Data")
 let jsonObject = {};
 this.a.forEach((value, key) => {
     jsonObject[key] = value
 });
  var saveData={};
  saveData["bmi_data"]=JSON.stringify(this.bmiData);
  saveData["diet_data"]=JSON.stringify(jsonObject);
  saveData["note"]=this.note;
  saveData["advice"]=JSON.stringify(this.advice);
  saveData["fta"]=JSON.stringify(this.fta);
  saveData["pa"]=JSON.stringify(this.pa);
  saveData["finalnote"]=this.finalnote;
  saveData["operation_type"]="add";

    var postData = 'myData=' + JSON.stringify(saveData);
   /* const options = {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',Accept: "application/pdf"}};
    this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/printchart", postData, options).subscribe(
      response => { // download file
       
        var filename = 'file.pdf';
        saveAs(response, filename);
  
});*/


this.http.post(Constants.API_ENDPOINT_1+"/CommonCtrl.php/printchart", postData, {
  headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',Accept: "application/pdf"},
  responseType: 'blob',
 
}).subscribe(
  response => { // download file
      //var blob = new Blob([response.blob()], {type: 'application/pdf'});
      var filename = this.bmiData.umr+"_"+this.datePipe.transform(new Date(), 'ddMMyyyy')+".pdf";
      saveAs(response, filename);
  },
  error => {
      console.error(`Error: ${error.message}`);
  }
);



}
setSessionData(){
  sessionStorage.setItem("advices",JSON.stringify(this.advice));
sessionStorage.setItem("fta",JSON.stringify(this.fta))
sessionStorage.setItem("pa",JSON.stringify(this.pa))
sessionStorage.setItem("note",this.note)
sessionStorage.setItem("finalnote",this.finalnote)
}

}
