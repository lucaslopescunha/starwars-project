import { TestBed } from '@angular/core/testing';
import { HttpTestingController,HttpClientTestingModule } from '@angular/common/http/testing';
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
    charactersService.getCharacter(10).subscribe((star :any) => {
      expect(star['name']).toBe('Luke');
    });
    const req = httpMock.expectOne(url+`people/10/`, 'call to api');
    expect(req.request.method).toBe('GET');
    req.flush({
      name: 'Luke'
    });

    httpMock.verify();
  });
});
