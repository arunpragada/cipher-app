import { Component, OnInit } from '@angular/core';
import {Constants } from '../../constants/constants';

@Component({
  selector: 'app-dietchartin',
  templateUrl: './dietchartin.component.html',
  styleUrls: ['./dietchartin.component.scss']
})
export class DietchartinComponent implements OnInit {
  constructor() { 
    
  }
  items: any[];
  keyword = 'food_item';
  abc='';
  dropdownList = [];
  // selectedItems = [];
   dropdownSettings = {};
   public a = new Map<string, string>(); 
   public summary = new Map<string, string>(); 
   


   public dietCharts1: any = {
    header: 'Lunch Time',
    startTime: '',
    endTime: '',
    options:  [{
      opHeader:"Option 1",optionRows:[
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
    },{
    opHeader:"Option 2",optionRows:[
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
  },
  {
  opHeader:"Option 3",optionRows:[
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
},{
opHeader:"Option 4",optionRows:[
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
},{
opHeader:"Option 5",optionRows:[
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
}
  
  ]
  };

  public dietCharts: any = {
    header: 'Lunch Time',
    startTime: '',
    endTime: '',
    options:  [{
      opHeader:"Option 1",optionRows:[
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
        {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
    },{
    opHeader:"Option 2",optionRows:[
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
      {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
  },
  {
  opHeader:"Option 3",optionRows:[
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
    {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
},{
opHeader:"Option 4",optionRows:[
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
},{
opHeader:"Option 5",optionRows:[
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:"5"}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]},
  {fi:"",optionCols:[{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1},{f1:"",rs:1}]}]
}
  
  ]
  };

/*public dietChartTypes: any[]=[{heading:'Early-Morning',time:'07:00 AM - 07:30 AM',p1:Object.create(this.dietCharts)},{heading:'Breakfast',time:'08:00 AM - 08:30 AM',p1:this.dietCharts},
  {heading:'Mid-Morning',time:'10:00 AM - 10:30 AM',p1:this.dietCharts},{heading:'Lunch',time:'01:00 PM - 01:30 PM',p1:this.dietCharts},{heading:'Snaks',time:'04:00 PM - 04:30 PM',p1:this.dietCharts},
  {heading:'Dinner',time:'07:00 PM - 07:30 PM',p1:this.dietCharts},{heading:'Bedtime',time:'08:00 PM - 08:30 PM',p1:this.dietCharts}];
 */
public dietChartTypes: any[]=[{heading:'Early-Morning',time:'07:00 AM - 07:30 AM',p1:{options:[{optionRows:[]}]}},{heading:'Breakfast',time:'08:00 AM - 08:30 AM',p1:{}},
  {heading:'Mid-Morning',time:'10:00 AM - 10:30 AM',p1:{}},{heading:'Lunch',time:'01:00 PM - 01:30 PM',p1:{}},{heading:'Snaks',time:'04:00 PM - 04:30 PM',p1:{}},
  {heading:'Dinner',time:'07:00 PM - 07:30 PM',p1:{}},{heading:'Bedtime',time:'08:00 PM - 08:30 PM',p1:{}}];

  ngOnInit() {
   // this.sp[0]=99;
   // console.log("Start");
    fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbankb')
    .then(result => result.json())
    .then(rowData => {this.items = rowData;
      this.dropdownList=rowData;
     // console.log("Data count "+JSON.stringify(this.items)) 
    }); 
    //console.log("End");

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'food_item',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    let diet: any =new Map(JSON.parse(sessionStorage.getItem('diet')));
    let summary: any =JSON.parse(sessionStorage.getItem('summary'));
    
    if(diet!=null){
  // console.log("DDD="+diet);
       this.a=diet;
  }
  if(summary!=null){
    // console.log("DDD="+diet);
         this.summary=summary;
    }

  }



  

  selectEvent(item,r,i,j,k) {
    //console.log("Select Item "+i+"=="+JSON.stringify(item))
    //console.log("AA "+this.dietChartTypes[0].p1[0].options[0].optionRows[0].optionCols[0].f1);
    //console.log("BB "+this.dietChartTypes[0].p1[0].options[0].optionRows[0].optionCols[2].f1);
    this.dietChartTypes[r].p1[i].options[j].optionRows[k].optionCols[4].f1=item.protein;
    this.dietChartTypes[r].p1[i].options[j].optionRows[k].optionCols[5].f1=item.carbohydrates;
    this.dietChartTypes[r].p1[i].options[j].optionRows[k].optionCols[6].f1=item.fat;
    this.dietChartTypes[r].p1[i].options[j].optionRows[k].optionCols[7].f1=item.calorie;
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something
  }
  userList1: any[] = [];

  lastkeydown1: number = 0;
  subscription: any;
  getUserIdsFirstWay($event) {
 //   let userId = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
   // this.userList1 = [];
//console.log("In FUnc"+userId)
   // if (userId.length > 2) {
     // if ($event.timeStamp - this.lastkeydown1 > 200) {
       // this.userList1 = this.searchFromArray(this.items, userId);
      //}
    //}
  }  
  onRQChanged(e,r,j,k){
    var q=e.target.value;
    this.a.set("r"+r+"o"+j+"r"+k+"c13", q);
    var fi=this.a.get("r"+r+"o"+j+"r"+k+"c11");
    var item = this.getSelectedProductByName(fi);
   //console.log("VVV "+JSON.stringify(item));
   var p=this.toConvert((item.protein/item.quantity)*q);
   var ch=this.toConvert((item.carbohydrates/item.quantity)*q);
   var f=this.toConvert((item.fat/item.quantity)*q);
   var c=this.toConvert((p*4)+(ch*4)+(f*9));
   var cr=item.calorie;
   var per=this.toConvert((q/item.quantity)*100);
   this.a.set("r"+r+"o"+j+"r"+k+"c2", p+"");
   this.a.set("r"+r+"o"+j+"r"+k+"c3", ch+"");
   this.a.set("r"+r+"o"+j+"r"+k+"c4", f+"");
   this.a.set("r"+r+"o"+j+"r"+k+"c5", c+"");
   this.a.set("r"+r+"o"+j+"r"+k+"c6", Math.round((cr/item.quantity)*q)+"");
   //this.a.set("r"+r+"o"+j+"r"+k+"c6", Math.round((cr/item.quantity)*q)+"("+cr+"-"+item.raw_weight+" "+item.weight_measure+")");
   this.a.set("r"+r+"o"+j+"r"+k+"c0",item.quantity_measure);
   this.a.set("r"+r+"o"+j+"r"+k+"c1",(q*item.raw_weight)/item.quantity+" "+item.weight_measure);
   this.a.set("r"+r+"o"+j+"r"+k+"c12",per+"%");
   var tk=this.toTKSum(this.a.get("r"+r+"o"+j+"r0c5"),this.a.get("r"+r+"o"+j+"r1c5"),this.a.get("r"+r+"o"+j+"r2c5"),this.a.get("r"+r+"o"+j+"r3c5"),this.a.get("r"+r+"o"+j+"r4c5"))
  tk=this.toConvert(tk)
   this.a.set("r"+r+"o"+j+"r0c7",tk+"");
   this.calcSummary(j);
  // console.log("Setting ="+JSON.stringify(this.a));
   sessionStorage.setItem("diet",JSON.stringify(Array.from(this.a.entries())));
   sessionStorage.setItem("summary",JSON.stringify(this.summary));
   //console.log("Setting summary "+JSON.stringify(this.summary))
  }
  onProductChanged(e,r,j,k) {
    var productName=e.target.value;
    this.a.set("r"+r+"o"+j+"r"+k+"c11", productName);
    this.a.set("r"+r+"o"+j+"r"+k+"c13", "");    
    this.a.set("r"+r+"o"+j+"r"+k+"c12", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c0", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c1", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c2", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c3", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c4", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c5", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c6", "");
    var tk=this.toTKSum(this.a.get("r"+r+"o"+j+"r0c5"),this.a.get("r"+r+"o"+j+"r1c5"),this.a.get("r"+r+"o"+j+"r2c5"),this.a.get("r"+r+"o"+j+"r3c5"),this.a.get("r"+r+"o"+j+"r4c5"))
   this.a.set("r"+r+"o"+j+"r0c7",tk+"");
   this.calcSummary(j);
  
}
getSelectedProductByName(selectedName: string) {
  return this.items.find(item => item.food_item === selectedName);
}
  searchFromArray(arr, regex) {
    let matches = [], i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  };
  toConvert(num){
    return Math.round( num * 100 + Number.EPSILON ) / 100;
  } 
  toTKSum(r1,r2,r3,r4,r5){
    var f=0;
    if(r1 != undefined && r1!="")
      f=f+parseFloat(r1);
      if(r2 != undefined && r2!="")
      f=f+parseFloat(r2);
      if(r3 != undefined && r3!="")
      f=f+parseFloat(r3);
      if(r4 != undefined && r4!="")
      f=f+parseFloat(r4);
      if(r5 != undefined && r5!="")
      f=f+parseFloat(r5);
    return f;
  }
  calcSummary(o){
    var sp=0;
    var sch=0;
    var sf=0;
    var sr=0;
    for(var i=0;i<7;i++){
     // "r"+r+"o"+j+"r"+k+"c2",
     for (var j=0;j<5;j++){
     var p= this.a.get("r"+i+"o"+o+"r"+j+"c2")
     var ch= this.a.get("r"+i+"o"+o+"r"+j+"c3")
     var f= this.a.get("r"+i+"o"+o+"r"+j+"c4")
     var r= this.a.get("r"+i+"o"+o+"r"+j+"c6")
     if(p!=undefined && p!="")
     sp=sp+parseFloat(p);
     if(ch!=undefined && ch!="")
     sch=sch+parseFloat(ch);
     if(f!=undefined && f!="")
     sf=sf+parseFloat(f);
     if(r!=undefined && r!="")
     sr=sr+parseFloat(r);
    }
    }
    if(o==0){
      this.summary["sp1"]=this.toConvert(sp)+"";
      this.summary["sch1"]=this.toConvert(sch);
      this.summary["sf1"]=this.toConvert(sf);
    var t=(sp*4)+(sch*4)+(sf*9)
    this.summary["spp1"]=this.toConvert(sp*4*100/t)+"%";
    this.summary["schp1"]=this.toConvert(sch*4*100/t)+"%";
    this.summary["sfp1"]=this.toConvert(sf*9*100/t)+"%";
//m mulgipliction
this.summary["spm1"]=this.toConvert(sp*4);
this.summary["schm1"]=this.toConvert(sch*4);
this.summary["sfm1"]=this.toConvert(sf*9);

this.summary["stk1"]=this.toConvert(t);
this.summary["sr1"]=this.toConvert(sr);

    //this.summary["sp1"]

  }
    else if(o==1){
      this.summary["sp2"]=this.toConvert(sp);
      this.summary["sch2"]=this.toConvert(sch);
      this.summary["sf2"]=this.toConvert(sf);
    var t=(sp*4)+(sch*4)+(sf*9)
    this.summary["spp2"]=this.toConvert(sp*4*100/t)+"%";
    this.summary["schp2"]=this.toConvert(sch*4*100/t)+"%";
    this.summary["sfp2"]=this.toConvert(sf*9*100/t)+"%";
    this.summary["spm2"]=this.toConvert(sp*4);
    this.summary["schm2"]=this.toConvert(sch*4);
    this.summary["sfm2"]=this.toConvert(sf*9);

    this.summary["stk2"]=this.toConvert(t);
    this.summary["sr2"]=this.toConvert(sr);

  }
    if(o==2){
      this.summary["sp3"]=this.toConvert(sp);
      this.summary["sch3"]=this.toConvert(sch);
      this.summary["sf3"]=this.toConvert(sf);
    var t=(sp*4)+(sch*4)+(sf*9)
    this.summary["spp3"]=this.toConvert(sp*4*100/t)+"%";
    this.summary["schp3"]=this.toConvert(sch*4*100/t)+"%";
    this.summary["sfp3"]=this.toConvert(sf*9*100/t)+"%";
    this.summary["spm3"]=this.toConvert(sp*4);
    this.summary["schm3"]=this.toConvert(sch*4);
    this.summary["sfm3"]=this.toConvert(sf*9);

    this.summary["stk3"]=this.toConvert(t);
    this.summary["sr3"]=this.toConvert(sr);
  }
    if(o==3){
      this.summary["sp4"]=this.toConvert(sp);
      this.summary["sch4"]=this.toConvert(sch);
      this.summary["sf4"]=this.toConvert(sf);
    var t=(sp*4)+(sch*4)+(sf*9)
    this.summary["spp4"]=this.toConvert(sp*4*100/t)+"%";
    this.summary["schp4"]=this.toConvert(sch*4*100/t)+"%";
    this.summary["sfp4"]=this.toConvert(sf*9*100/t)+"%";
    this.summary["spm4"]=this.toConvert(sp*4);
    this.summary["schm4"]=this.toConvert(sch*4);
    this.summary["sfm4"]=this.toConvert(sf*9);
    this.summary["stk4"]=this.toConvert(t);
    this.summary["sr4"]=this.toConvert(sr);
  }
    if(o==4){
      this.summary["sp5"]=this.toConvert(sp);
      this.summary["sch5"]=this.toConvert(sch);
      this.summary["sf5"]=this.toConvert(sf);
    var t=(sp*4)+(sch*4)+(sf*9)
    this.summary["spp5"]=this.toConvert(sp*4*100/t)+"%";
    this.summary["schp5"]=this.toConvert(sch*4*100/t)+"%";
    this.summary["sfp5"]=this.toConvert(sf*9*100/t)+"%";
    this.summary["spm5"]=this.toConvert(sp*4);
    this.summary["schm5"]=this.toConvert(sch*4);
    this.summary["sfm5"]=this.toConvert(sf*9);
    this.summary["stk5"]=this.toConvert(t);
    this.summary["sr5"]=this.toConvert(sr);
  }
  }
  clearRow(r,j,k){
  
    this.a.set("r"+r+"o"+j+"r"+k+"c13", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c11", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c12", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c0", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c1", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c2", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c3", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c4", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c5", "");
    this.a.set("r"+r+"o"+j+"r"+k+"c6", "");
    var tk=this.toTKSum(this.a.get("r"+r+"o"+j+"r0c5"),this.a.get("r"+r+"o"+j+"r1c5"),this.a.get("r"+r+"o"+j+"r2c5"),this.a.get("r"+r+"o"+j+"r3c5"),this.a.get("r"+r+"o"+j+"r4c5"))
   this.a.set("r"+r+"o"+j+"r0c7",tk+"");
   this.calcSummary(j);
  // console.log("Setting ="+JSON.stringify(this.a));
   sessionStorage.setItem("diet",JSON.stringify(Array.from(this.a.entries())));
   sessionStorage.setItem("summary",JSON.stringify(this.summary));
  }
}
