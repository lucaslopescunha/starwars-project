import { Starship } from './starship';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { HttpClient } from '@angular/common/http';
@Injectable()
export class StarshipsService {
  private url: string = "https://swapi.co/api/";


  constructor(
    private http: HttpClient) {

  }

  getStarships(): Observable<any> {
    return this.http.get(this.url + "starships/");

  }

  getStarship(id) : Observable<any>{
    return this.http.get(this.url + "starships/" + id + "/");
  }

  getPilots(id) : Observable<any>{
    return this.http.get(this.url + "people/" + id+ "/");
  }

  getDetails(id: number) : Observable<any>{

    return this.http.get(this.url + 'starships/' + id + '/')
      .pipe(
      mergeMap((starship: Starship) => {
        const pilotPromisses = this.convertUrlIntoPromise(starship.pilots);
        return forkJoin(pilotPromisses).map(result => {
          return result;
        });
      }));
  }

  private convertUrlIntoPromise(urls: string[]) {
    return urls.map(url => this.http.get(url));
  }
}
