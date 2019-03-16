import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/login.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-view',
  templateUrl: './home-page-view.component.html',
  styleUrls: ['./home-page-view.component.css']
})
export class HomePageViewComponent implements OnInit {

  registrationViewState;

  registerModel : any = {};
  loginModel : any = {};

  constructor(
    private loginService: LoginService,
    private router: Router ) {
    this.registrationViewState = 0;
  }

  ngOnInit() {
  }

  setSelectedRegistrationViewState(state: number){
    this.registrationViewState = state;
  }

  registerUser(){
    // TODO:
    if(this.registerModel.userFirstName == ('' || undefined) || this.registerModel.userLastName == ('' || undefined) || this.registerModel.userEmail == ('' || undefined) || this.registerModel.userPassword == ('' || undefined)){
      // TODO: broadcast message
      console.log("Not all fields filled out correctly");
      return;
    } else {
      this.loginService.registerUser(
        this.registerModel.userFirstName,
        this.registerModel.userLastName,
        this.registerModel.userEmail,
        this.registerModel.userPassword
      )
      .pipe(first()).subscribe(
        message => {
          // TODO: login user, broadcast message.
          this.registerModel = {};
          this.router.navigate(['/search']);

        },
        error => {
          // TODO: broadcast error message.
          this.registerModel = {};
          return;
        }
      )
    }    
  }

  registerCompany(){
    // TODO: 
    if(this.registerModel.companyName == ('' || undefined) || this.registerModel.companyEmail == ('' || undefined) || this.registerModel.companyPassword == ('' || undefined)){
      // TODO: broadcast message
      console.log("Not all fields filled out correctly");
      return;
    } else {
      this.loginService.registerCompany(
        this.registerModel.companyName,
        this.registerModel.companyEmail,
        this.registerModel.companyPassword
      )
      .pipe(first()).subscribe(
        message => {
          // TODO: broadcast, login, route to profile.
          this.registerModel = {};
          this.router.navigate(['/search']);
        },
        error => {
          // TODO: broadcast error message.
          this.registerModel = {};
          return;
        }
      )
    }
    return;
  }
}
