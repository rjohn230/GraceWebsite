import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CoverPhotoComponent } from './cover-photo/cover-photo.component';




@NgModule({
    declarations: [
        HomeComponent,
        CoverPhotoComponent
        
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
