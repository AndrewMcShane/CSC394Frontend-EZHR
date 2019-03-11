import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageViewComponent } from './search-page-view/search-page-view.component';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchPageViewComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchPageRoutingModule { }
