import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { Subscription } from 'rxjs/Subscription';

import { Character } from './character';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharactersService {

  characters: Character[];
  private url: string = "https://swapi.co/api/";

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) {

  }

  getSpecies(id) {
    return this.http.get(this.url + "species/" + id);
  }

  getCharacters() {
    return this.http.get(this.url + "people/?page=1");

  }

  getCharacter(link) {
    console.log(this.url + "people/" + link+"/");
    return this.http.get(this.url + "people/" + link+"/");

  }

  populaDadosForm(formulario, dados) {
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

  recebe(dados) {
    //console.log(dados);
  }

}
