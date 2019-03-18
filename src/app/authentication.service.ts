import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// TODO: replace with url provided by backend
const url = 'http://3.80.175.152:82/login';
const TOKEN_NAME = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    var obj = {
      email: "bob.com",
      password: "1234" 
    }

    var jsonObj = JSON.stringify(obj);
    console.log(jsonObj);
    // TODO: Replace from api provided from backend
    const apiUrl = url;
    

    return this.http.post<any>(apiUrl,jsonObj)
    .pipe(
      map(
        data => {
          console.log(data);
          /*if(data && data.jwt){
            localStorage.setItem(TOKEN_NAME, JSON.stringify(data));
          }*/
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
