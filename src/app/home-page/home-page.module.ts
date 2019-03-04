import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageViewComponent } from './home-page-view/home-page-view.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomePageViewComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FormsModule
  ]
})
export class HomePageModule { }
