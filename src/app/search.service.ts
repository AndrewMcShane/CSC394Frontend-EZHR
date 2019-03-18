import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const url = "http://3.80.175.152/jobs/";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  // Queries the database for any search stuff, returns it
  getJobListings(query: string){
    const apiUrl = url + '%' + query;
    return this.http.get<any>(apiUrl)
    .pipe(
      map (
        data => {
          return data;
        }
      )
    );
  }

}
