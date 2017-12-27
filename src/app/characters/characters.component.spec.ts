import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  describe('CharactersComponent', () => {
    it('Should get the Id of he link', () => {
      expect(component.getCharacter('https://swapi.co/api/people/10')).toBe(10);
    });
  });
  



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
