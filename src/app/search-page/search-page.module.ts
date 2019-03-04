import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageViewComponent } from './search-page-view/search-page-view.component';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchPageViewComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class SearchPageModule { }
