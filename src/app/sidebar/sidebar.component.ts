import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    show:boolean;
    
}

export const ROUTES: RouteInfo[] = [
   // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
   // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
   // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/bmicalc', title: 'BMI Calculations',     icon:'nc-bold',    class: '',show:true },
    { path: '/dietchartin',          title: 'Diet Chart Input',      icon:'nc-paper',  class: '',show:true },
    { path: '/dietchartout',          title: 'Diet Chart Output',      icon:'nc-single-copy-04',  class: '',show:true }
  //  { path: '/table',         title: 'Diet Chart Output',        icon:'nc-tile-56',    class: '' },
    //{ path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;

    um:boolean=false;
    bmi:boolean=false;
    din:boolean=false;
    dout:boolean=false;
    md:boolean=false;

    ngOnInit() {

       let userInfo =JSON.parse(localStorage.getItem('userData'));
       let modules:any[] = userInfo.modules;
        
      //  console.log("Modules"+modules[0]);
        for(let m in modules){
            if(modules[m]=="3")
                this.um=true;
                else if(modules[m]=="4")
                this.bmi=true;
                else if(modules[m]=="5")
                this.din=true;
                else if(modules[m]=="6")
                this.dout=true;
                else if(modules[m]=="7")
                this.md=true;
        }
    
        this.menuItems=ROUTES.filter(menuItem => {
            
            if(menuItem.path==="/bmicalc")
                {
                    if(!this.bmi) menuItem.show=false;
                }else if(menuItem.path=="/dietchartin"){
                    if(!this.din) menuItem.show=false;
                }else if(menuItem.path=="/dietchartout"){
                    if(!this.dout) menuItem.show=false;
                }
                
            return menuItem;
        });
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

}
