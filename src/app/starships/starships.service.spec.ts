import { TranslateModule } from '@ngx-translate/core';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { StarshipsService } from './starships.service';
import { Injector, ReflectiveInjector } from '@angular/core';
import { Starships } from './starships';

describe('StarshipsService', () => {
  let starshipsService: StarshipsService;
  let url: string = "https://swapi.co/api/";
  let starship: Starships;
  let httpMock: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [
        StarshipsService
      ]
    });



    httpMock = TestBed.get(HttpTestingController);
    starshipsService = new StarshipsService(httpMock);
 
  });

  it('should be found', () => {
    starshipsService.getStarship(10).subscribe(star => {
      starship = star;
    });
    expect(starship).toBeDefined();
    //console.log("oi"+starship.url); 
    // expect(starship.url).toEqual(url + 'starships/10/');
  });
});


