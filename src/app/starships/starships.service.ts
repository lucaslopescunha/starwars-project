import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class StarshipsService {
  private url: string = "https://swapi.co/api/";


  constructor(
    private http: Http) {

  }


  getStarships() {
    return this.http.get(this.url + "starships/")
      .map(dados => dados.json());

  }

  getStarship(id) {
    return this.http.get(this.url + "starships/" + id + "/")
      .map(dados => dados.json());

  }
  getPilots(id) {
    return this.http.get(this.url + "people/" + id)
      .map(res => res.json());
  }

  getDetails(id: number) {

    return this.http.get('https://swapi.co/api/starships/' + id+'/')
      .pipe(
      mergeMap((starship: Response) => {
        const pilotPromisses = this.convertUrlIntoPromise(starship.json().pilots);
        return forkJoin(pilotPromisses).map(result => {
          const pilots = result.map(resultPilots => resultPilots.json());
          return pilots;
        });
      }));
  }

  private convertUrlIntoPromise(urls: string[]) {
    console.log("conv");
    return urls.map(url => this.http.get(url));
  }
}
