import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Subscription } from 'rxjs/Subscription';

import { Character } from './character';

@Injectable()
export class CharactersService {

  characters: Character[];
  private url:string = "https://swapi.co/api/";

  constructor(
    private formBuilder: FormBuilder,
    private http: Http) {

  }

  getSpecies(id) {
    return this.http.get(this.url+"species/"+  id)
        .map(res => res.json());
  }

  getCharacters() {
    return this.http.get(this.url+"people/?page=1")
        .map(dados => dados.json());

  }

  getCharacter(link) {
    return this.http.get(this.url+"people/"+link)
        .map(dados => dados.json());

  }

  populaDadosForm(formulario, dados){
    formulario = this.formBuilder.group({
      count: [null],
      next: [null],
      previous: [null],
      results: [null]
    });
    formulario.patchValue({
        count: dados.count,
        next: dados.next,
        previous: dados.previous,
        results: dados.results
    });
    return formulario;
  }

  recebe(dados){
    //console.log(dados);
  }
  
}
