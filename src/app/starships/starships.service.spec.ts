import { TranslateModule } from '@ngx-translate/core';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { StarshipsService } from './starships.service';
import { Injector, ReflectiveInjector } from '@angular/core';

describe('StarshipsService', () => {
  let starshipsService: StarshipsService;
  let url: string = "https://swapi.co/api/";
  let starship: any;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        StarshipsService
      ]
    });

    starshipsService = TestBed.get(StarshipsService);
    httpMock = TestBed.get(HttpTestingController);
 
  });

  it('should get the data successful', () => {
    starshipsService.getStarship(10).subscribe((star :any) => {
      expect(star['name']).toBe('Millennium Falcon');
    });
    const req = httpMock.expectOne(`https://swapi.co/api/starships/10/`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush({
      name: 'Millennium Falcon'
    });

    httpMock.verify();
  });

  it('should get the data successful', () => {
    starshipsService.getPilots(10).subscribe((star :any) => {
      expect(star['name']).toBe('Obi-Wan Kenobi');
    });
    const req = httpMock.expectOne(`https://swapi.co/api/people/10/`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush({
      name: 'Obi-Wan Kenobi'
    });

    httpMock.verify();
  });
});


