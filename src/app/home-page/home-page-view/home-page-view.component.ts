import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page-view',
  templateUrl: './home-page-view.component.html',
  styleUrls: ['./home-page-view.component.css']
})
export class HomePageViewComponent implements OnInit {

  registrationViewState;

  registerModel : any = {};
  loginModel : any = {};

  constructor() {
    this.registrationViewState = 0;
  }

  ngOnInit() {
  }

  setSelectedRegistrationViewState(state: number){
    this.registrationViewState = state;
  }

  registerUser(){
    return;
    // For monday: just route to search page.
  }

  registerCompany(){
    return;
    // For monday: just route to search page.
  }
}
