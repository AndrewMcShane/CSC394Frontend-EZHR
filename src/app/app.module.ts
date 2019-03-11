import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FormsModule } from '@angular/forms';
import { CompanyPageComponent } from './company-page/company-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SharedModule } from './shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

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
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AuthenticationService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
