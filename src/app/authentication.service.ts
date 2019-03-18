import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Request } from 'selenium-webdriver/http';

// TODO: replace with url provided by backend
const url = 'http://3.80.175.152:82/login';
const TOKEN_NAME = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    var obj = {
      email: email,
      password: password 
    }

    var jsonObj = JSON.stringify(obj);
    
    const apiUrl = url;
    
    return this.http.post<any>(apiUrl,jsonObj, this.options)
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
