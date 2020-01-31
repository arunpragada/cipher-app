import { Routes } from '@angular/router';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { ApppagesComponent } from '../../pages/apppages/apppages.component';
import { ApprolesComponent } from '../../pages/approles/approles.component';
import { AppusersComponent } from '../../pages/appusers/appusers.component';
import { CalbankComponent } from '../../pages/calbank/calbank.component';
import { CalbankrefComponent } from '../../pages/calbankref/calbankref.component';
import { DietchartinComponent } from 'app/pages/dietchartin/dietchartin.component';
import { DietchartoutComponent } from 'app/pages/dietchartout/dietchartout.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'apppages',       component: ApppagesComponent },
    { path: 'approles',       component: ApprolesComponent },
    { path: 'appusers',       component: AppusersComponent },
    { path: 'calbank',        component: CalbankComponent},
    { path: 'calbankref',     component: CalbankrefComponent},
    { path: 'dietchartin',     component: DietchartinComponent},
    { path: 'dietchartout',     component: DietchartoutComponent}
   
];
