import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../starships.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-starships-detail',
  templateUrl: './starships-detail.component.html',
  styleUrls: ['./starships-detail.component.css']
})
export class StarshipsDetailComponent implements OnInit {

  inscricao: Subscription;

  rota: string = 'characters';
  starship: any;
  specie: any;
  pilots: any[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StarshipsService
  ) { 
  }
  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.service.getStarship(id).subscribe(star => {
          this.starship = star;
        });
      }
    );
    this.getDetailPilots();
  }
  getCharacter(character: any) {
    let id = character.url.match('[0-9]+')[0];
    return id;
  }

  getDetailPilots() {
    return this.route.params
    .subscribe( (params: any) => {
      this.service.getDetails(params['id'])
      .subscribe(
        (pilot: any[]) => {
          this.pilots = pilot;
          console.log(pilot);
        },
        (error) => {
          this.pilots = [];
          console.log(error);
        }
      );
    });
  }


}
