import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyPageComponent } from './company-page/company-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './home-page/home-page.module#HomePageModule'
  },
  {
    path: 'search',
    loadChildren: './search-page/search-page.module#SearchPageModule'
  },
  {
    path: 'company',
    component: CompanyPageComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
