import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { ROUTES } from '../../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { Location} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    public user:string;

    public isCollapsed = true;
    @ViewChild("navbar-cmp", {static: false}) button;

    constructor(location:Location, private renderer : Renderer, private element : ElementRef, private router: Router) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
          this.sidebarClose();
       });
       let ud=JSON.parse(localStorage.getItem('userData'))
      // console.log("VV"+JSON.stringify(ud))
       this.user=ud.name;

    }
    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
          else if(titlee === "/apppages")
            return 'MODULES';
            else if(titlee === "/approles")
            return 'ROLES';
            else if(titlee === "/appusers")
            return 'USERS';
            
         else  if(titlee === "/apppages" || titlee === "/approles" || titlee === "/appusers")
            return titlee.replace("/","");
        else if(titlee === "/calbank")
            return 'Calorie Bank';
            else if(titlee === "/calbankref")
            return 'Calorie Bank Reference';
            else if(titlee === "/bmicalc")
            return 'BMI Calculations';
      }
      return 'Dashboard';
    }
    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
      }
      sidebarOpen() {
          const toggleButton = this.toggleButton;
          const html = document.getElementsByTagName('html')[0];
          const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
          setTimeout(function(){
              toggleButton.classList.add('toggled');
          }, 500);

          html.classList.add('nav-open');
          if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
          }
          this.sidebarVisible = true;
      };
      sidebarClose() {
          const html = document.getElementsByTagName('html')[0];
          const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
          if (window.innerWidth < 991) {
            setTimeout(function(){
              mainPanel.style.position = '';
            }, 500);
          }
          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          html.classList.remove('nav-open');
      };
      collapse(){
        this.isCollapsed = !this.isCollapsed;
        const navbar = document.getElementsByTagName('nav')[0];
        console.log(navbar);
        if (!this.isCollapsed) {
          navbar.classList.remove('navbar-transparent');
          navbar.classList.add('bg-white');
        }else{
          navbar.classList.add('navbar-transparent');
          navbar.classList.remove('bg-white');
        }

      }

      onLoggedout() {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
    }
    clearSessionData(){
      
      if(confirm('Are You Sure Want to Clear Session Data ')){
      
      sessionStorage.removeItem('bmidata')
sessionStorage.removeItem('recdata')
sessionStorage.removeItem('diet')
sessionStorage.removeItem('summary')
sessionStorage.removeItem('advices')
sessionStorage.removeItem('fta')
sessionStorage.removeItem('pa')
sessionStorage.removeItem('note')
sessionStorage.removeItem('finalnote')
location.reload()
    }
  }

}
