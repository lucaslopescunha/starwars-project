import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/RX';
import { CharactersService } from './characters.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Character } from './character';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  rota: string = 'characters';
  characters: Character[];
  inscricao: Subscription;
  formulario: any;
  isActive: boolean;
  public constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.isActive = false;
  }

  ngOnInit() {
    this.formulario = {
      count: null,
      next: null,
      previous: null,
      results: null

    };
    this.charactersService.getCharacters()
      .subscribe(dados => { this.populaDadosForm(dados); });;
    console.log(this.formulario);
  }

  populaDadosForm(dados) {
    this.formulario = dados;
  }

}
