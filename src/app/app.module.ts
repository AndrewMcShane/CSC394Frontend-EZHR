import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FormsModule } from '@angular/forms';
import { CompanyPageComponent } from './company-page/company-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CompanyPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
