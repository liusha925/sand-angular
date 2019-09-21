import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "../index/index.component";
import { SysDashboardComponent } from "./dashboard/sys-dashboard.component";
import { SysMenuPageComponent } from "./menu/page/sys-menu-page.component";

const routes: Routes = [
    {
        path: 'index', component: IndexComponent, children: [
            {
                path: 'dashboard',
                component: SysDashboardComponent
            },
            {
                path: 'menuPage',
                component: SysMenuPageComponent
            },
            {
                path: '**',
                redirectTo: '/index/dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/index/dashboard',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SysRoutingModule { }
