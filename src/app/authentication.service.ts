import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// TODO: replace with url provided by backend
const url = '/';
const TOKEN_NAME = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    var obj = {
      username: email,
      password: password
    }

    var jsonObj = JSON.stringify(obj);
    
    // TODO: Replace from api provided from backend
    const apiUrl = url + "loginUser.php";

    return this.http.post<any>(apiUrl,jsonObj)
    .pipe(
      map(
        data => {
          if(data && data.jwt){
            localStorage.setItem(TOKEN_NAME, JSON.stringify(data));
          }
        },
        error => { console.log(error);}
      )
    );
  }

  logout(){
    localStorage.removeItem(TOKEN_NAME);
  }

  getToken(){
    return localStorage.getItem(TOKEN_NAME);
  }
}
