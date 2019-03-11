import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoginService } from '../login.service';
import { ProfileService } from '../profile.service';

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
    private profileService: ProfileService) { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  login(){
    this.isLoggedIn = true;
    this.loginModel = {};
    // TODO: call login service and base respnse on that. 
    // also, think about a message service for displaying messages.
    this.router.navigate(['/search']);
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