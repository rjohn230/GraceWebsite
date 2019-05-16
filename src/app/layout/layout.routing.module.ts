import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: 
        [
            {path:'', redirectTo:'home', pathMatch:'prefix'},
            {path:'home', loadChildren:'./home/home.module#HomeModule'},
            {path:'faq' , component:FaqComponent},
            {path:'**', redirectTo:'home', pathMatch:'prefix'},
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class LayoutRoutingModule { }
