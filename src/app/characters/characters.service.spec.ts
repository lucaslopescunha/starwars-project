import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CharactersService } from "./characters.service";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CharactersService', () => {
  let charactersService: CharactersService;
  let url: string = "https://swapi.co/api/";
  let starship: any;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        ReactiveFormsModule, FormsModule
      ],
      providers: [
        CharactersService
      ]
    });

    charactersService = TestBed.get(CharactersService);
    httpMock = TestBed.get(HttpTestingController);

  });


  it('should get the data successful', () => {
    charactersService.getCharacter(10).subscribe((star: any) => {
      expect(star['name']).toBe('Luke');
    });
    const req = httpMock.expectOne(url + `people/10/`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush({
      name: 'Luke'
    });

    httpMock.verify();
  });

  it('should get the data successful', () => {
    const species = 
      {
        count: '2',

        results: [
          {
            name: "Luke Skywalker",
            height: "172"
          },
          {
            name: "C-3PO",
            height: '167'
          }]
      };
    charactersService.getCharacters().subscribe(char => {
      expect(char['count']).toBe('2');
      expect(char['results'][0]['name']).toBe(species['results'][0]['name']);
    });
    const req = httpMock.expectOne(url + `people/?page=1`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush({
      count: '2',

      results: [
        {
          name: "Luke Skywalker",
          height: "172"
        },
        {
          name: "C-3PO",
          height: 167
        }]
    });

    httpMock.verify();
  });
  it('should get the data successful', () => {
    charactersService.getSpecies(10).subscribe((star: any) => {
      expect(star['name']).toBe('Sullustan');
    });
    const req = httpMock.expectOne(url + `species/10`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush({
      name: 'Sullustan'

    });

    httpMock.verify();
  });
});
