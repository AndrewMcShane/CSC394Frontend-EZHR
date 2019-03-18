import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoginService } from '../login.service';
import { ProfileService } from '../profile.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  private isLoggedIn: boolean;

  loginModel: any = {};

  constructor(private router:Router, 
    private authService:AuthenticationService,
    private loginService: LoginService,
    private profileService: ProfileService) { 
      this.subscribeNavigation();
    }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  subscribeNavigation(){
    this.router.events.subscribe (
      e => {
        if(e instanceof NavigationStart){
          if(this.authService.getToken()){
            this.isLoggedIn = true;
          } else {
            this.isLoggedIn = false;
          }
        }
      }
    );
  }

  login(){

    // For testing purposes only
    this.isLoggedIn = true;
    this.loginModel = {};
    this.router.navigate(['/search']);
    return;/*
    // this is the production code.
    if(this.loginModel.emailIn == ('' || undefined) || this.loginModel.passwordIn == ('' || undefined)){
      // broadcast as well.
      console.log("Empty username or email!");
    } else {
      this.authService.login(this.loginModel.emailIn, this.loginModel.passwordIn)
      .pipe(first()).subscribe(
        message => {
          //broadcast message
          this.isLoggedIn = true;
          this.loginModel = {};
          this.router.navigate(['/search']);
          return;
        },
        error => {
          this.isLoggedIn = false;
          // broadcase message
          console.log(error.error);
        }
      )
    }*/
  }

  logout(){
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

  goToProfile(){
    // Demo code only.
    // TODO: call profile service for the user ID. 
    this.router.navigate(['/user']);
  }

  toggleMenu(toState : boolean){
    if(toState) { document.getElementById("mobileSlideNav").style.width="100%"; }
    else {  document.getElementById("mobileSlideNav").style.width="0px"; }
  }
}