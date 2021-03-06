import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = "/";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  // kind of a misnomer: authentication service handles the login feature. it might make more sense to rename this to 'registration service' in the future.

  registerUser(firstName: string, lastName: string, email: string, password: string) {
   
    const  apiUrl = "http://3.80.175.152/register?email="+email+"&password="+password+"&firstName="+firstName+"&lastName="+lastName;

    return this.http.get<any>(apiUrl,{} )
    .pipe(
      map (
        data => {
          console.log(data);
          return data;
        }
      )
    );
  }

  registerCompany(companyName: string, email:string, password: string) {
    
    const apiUrl = url +"RegisterCompany.php";

    var jsonObj = JSON.stringify({
      companyName: companyName,
      email: email,
      password: password
    });

    return this.http.post<any>(apiUrl, jsonObj)
    .pipe(
      map (
        data => {
          return data;
        }
      )
    );
  }
}
