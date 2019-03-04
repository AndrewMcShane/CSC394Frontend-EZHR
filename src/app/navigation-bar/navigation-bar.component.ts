import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  private isLoggedIn: boolean;

  loginModel: any = {};

  constructor(private router:Router) { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  login(){
    this.isLoggedIn = true;
    this.loginModel = {};
    this.router.navigate(['/search']);
  }

  logout(){
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }

  goToProfile(){
    // Demo code only.
    this.router.navigate(['/user']);
  }

  toggleMenu(toState : boolean){
    if(toState) { document.getElementById("mobileSlideNav").style.width="100%"; }
    else {  document.getElementById("mobileSlideNav").style.width="0px"; }
  }
}