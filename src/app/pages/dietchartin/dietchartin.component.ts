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
    console.log("Start");
    fetch(Constants.API_ENDPOINT_1+'/CommonCtrl.php/getcalbank')
    .then(result => result.json())
    .then(rowData => {this.items = rowData;
      this.dropdownList=rowData;
      console.log("Data count "+JSON.stringify(this.items)) 
    }); 
    console.log("End");

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'food_item',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };



  }



  

  selectEvent(item,r,i,j,k) {
    console.log("Select Item "+i+"=="+JSON.stringify(item))
    console.log("AA "+this.dietChartTypes[0].p1[0].options[0].optionRows[0].optionCols[0].f1);
    console.log("BB "+this.dietChartTypes[0].p1[0].options[0].optionRows[0].optionCols[2].f1);
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
   console.log("VVV "+JSON.stringify(item));
   var p=this.toConvert((item.protein/item.quantity)*q);
   var ch=this.toConvert((item.carbohydrates/item.quantity)*q);
   var f=this.toConvert((item.fat/item.quantity)*q);
   var c=this.toConvert((p*4)+(ch*4)+(f*9));
   var cr=item.calorie;
   var per=(q/item.quantity)*100;
   this.a.set("r"+r+"o"+j+"r"+k+"c2", p+"");
   this.a.set("r"+r+"o"+j+"r"+k+"c3", ch+"");
   this.a.set("r"+r+"o"+j+"r"+k+"c4", f+"");
   this.a.set("r"+r+"o"+j+"r"+k+"c5", c+"");
   this.a.set("r"+r+"o"+j+"r"+k+"c6", Math.round((cr/item.quantity)*q)+"");
   //this.a.set("r"+r+"o"+j+"r"+k+"c6", Math.round((cr/item.quantity)*q)+"("+cr+"-"+item.raw_weight+" "+item.weight_measure+")");
   this.a.set("r"+r+"o"+j+"r"+k+"c0",item.quantity_measure);
   this.a.set("r"+r+"o"+j+"r"+k+"c1",(q*item.raw_weight)/item.quantity+" "+item.weight_measure);
   this.a.set("r"+r+"o"+j+"r"+k+"c12",per+"%");
  }
  onProductChanged(e,r,j,k) {
    var productName=e.target.value;
    this.a.set("r"+r+"o"+j+"r"+k+"c11", productName);
    console.log("PNAME="+productName+"=="+this.a.get("r"+r+"o"+j+"r"+k+"c11"));
    var q=this.a.get("r"+r+"o"+j+"r"+k+"c13");
    if(q!="" || q!=null){
      var qt=parseInt(this.a.get("r"+r+"o"+j+"r"+k+"c13"));
      var item = this.getSelectedProductByName(productName);
      var p=this.toConvert((item.protein/item.raw_weight)*qt);
      var ch=this.toConvert((item.carbohydrates/item.raw_weight)*qt);
      var f=this.toConvert((item.fat/item.raw_weight)*qt);
      var c=this.toConvert((p*4)+(ch*4)+(f*9));
      var cr=item.calorie;
      this.a.set("r"+r+"o"+j+"r"+k+"c2", p+"");
      this.a.set("r"+r+"o"+j+"r"+k+"c3", ch+"");
      this.a.set("r"+r+"o"+j+"r"+k+"c4", f+"");
      this.a.set("r"+r+"o"+j+"r"+k+"c5", c+"");
      this.a.set("r"+r+"o"+j+"r"+k+"c6", cr+"("+item.raw_weight+" "+item.weight_measure+")");
    }
   // console.log("Drop Down "+this.dietChartTypes[r].p1[i].options[j].optionRows[k].fid);
 /*  var item = this.getSelectedProductByName(productName);
   console.log("VVV "+JSON.stringify(item));
   this.a.set("r"+r+"o"+j+"r"+k+"c4", item.protein);
   this.a.set("r"+r+"o"+j+"r"+k+"c5", item.carbohydrates);
   this.a.set("r"+r+"o"+j+"r"+k+"c6", item.fat);
   this.a.set("r"+r+"o"+j+"r"+k+"c7", item.calorie);*/
   
 
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
}
