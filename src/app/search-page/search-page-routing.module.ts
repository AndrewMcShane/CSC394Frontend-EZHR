import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageViewComponent } from './search-page-view/search-page-view.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPageViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule { }
