import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = "/";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  // Queries the database for any search stuff, returns it
  getJobListings(query: string){
    const apiUrl = url + "SearchListings.php";

    var jsonObj = JSON.stringify({
      query:query
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
