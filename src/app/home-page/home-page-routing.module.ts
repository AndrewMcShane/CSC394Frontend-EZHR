import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageViewComponent } from './home-page-view/home-page-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageViewComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
