import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  private url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1';
  private headers = new HttpHeaders({
		'x-rapidapi-key': 'adf312ea5dmshe3a2c507c58fc87p1f36bfjsn5fec866a6dd0',
		'x-rapidapi-host': 'ott-details.p.rapidapi.com'
  });

  getTopMovies(): Observable<any> {
    return this.http.get<any>(this.url, { headers: this.headers });
  }
}
