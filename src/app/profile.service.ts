import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private authService:AuthenticationService) { }

  // method for retreval of user profile token ID
  getCurrentUserProfileID(){
    return JSON.parse(this.authService.getToken()).userID;
  }
  // method for specifying if the current user is a job seeker or a company
  getCurrentUserProfileType(){
    return JSON.parse(this.authService.getToken()).profileType;
  }

  loadUserProfile(userID: number){
    // TODO:
  }

  loadCompanyProfile(companyID: number) {
    // TODO:
  }


}
