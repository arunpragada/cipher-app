import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    
}

export const ROUTES: RouteInfo[] = [
   // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
   // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
   // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/bmicalc', title: 'BMI Calculations',     icon:'nc-bell-55',    class: '' },
    { path: '/dietchartin',          title: 'Diet Chart Input',      icon:'nc-single-02',  class: '' },
    { path: '/dietchartout',          title: 'Diet Chart Output',      icon:'nc-single-02',  class: '' }
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


    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
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
