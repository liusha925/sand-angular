import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from "../main/main.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SysMenuPageComponent } from "./menu/page/sys-menu-page.component";
import { SysMenuAddComponent } from "./menu/add/sys-menu-add.component";
import { SysMenuEditComponent } from "./menu/edit/sys-menu-edit.component";

const routes: Routes = [
  {
    path: 'sys', component: MainComponent, children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'menu/page',
        component: SysMenuPageComponent
      },
      {
        path: 'menu/add',
        component: SysMenuAddComponent
      },
      {
        path: 'menu/edit',
        component: SysMenuEditComponent
      },
      {
        path: '**',
        redirectTo: '/sys/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/sys/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class SysRoutingModule {

}
