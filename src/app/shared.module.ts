import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-page/search-page-view/search-result/search-result.component';
import { SearchResultPopupComponent } from './search-page/search-page-view/search-result-popup/search-result-popup.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    SearchResultComponent,
    SearchResultPopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SearchResultComponent,
    SearchResultPopupComponent
  ]
})
export class SharedModule { }
