import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { ApppagesComponent } from '../../pages/apppages/apppages.component'
import { AgGridModule } from 'ag-grid-angular';
import { ApprolesComponent } from '../../pages/approles/approles.component';
import { AppusersComponent } from '../../pages/appusers/appusers.component';
import { CalbankComponent } from '../../pages/calbank/calbank.component';
import { CalbankrefComponent } from '../../pages/calbankref/calbankref.component';
import { DietchartinComponent } from '../../pages/dietchartin/dietchartin.component';
import { DietchartoutComponent } from '../../pages/dietchartout/dietchartout.component';
import { BmicalcComponent } from '../../pages/bmicalc/bmicalc.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IgxExpansionPanelModule,IgxTabsModule } from 'igniteui-angular';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    IgxExpansionPanelModule,
    IgxTabsModule,
    AutocompleteLibModule,
    NgMultiSelectDropDownModule.forRoot(),
    NguiAutoCompleteModule
   
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    ApppagesComponent,
    ApprolesComponent,
    AppusersComponent,
    CalbankComponent,
    CalbankrefComponent,
    DietchartinComponent,
    DietchartoutComponent,
    BmicalcComponent
  ]
})

export class AdminLayoutModule {}
