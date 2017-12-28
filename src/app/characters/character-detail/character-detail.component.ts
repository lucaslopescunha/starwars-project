import { CharactersService } from './../characters.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { forkJoin } from 'rxjs/observable/forkJoin';
@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  inscricao: Subscription;
  character: any;
  specie: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CharactersService
  ) { 

  }

  ngOnInit() {
    
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];        
        let char = this.service.getCharacter(id);
        let specie = this.service.getSpecies(id);
        forkJoin([char, specie]).subscribe(res => {
          this.character = res[0];
        });

      }
    );

  }

}
