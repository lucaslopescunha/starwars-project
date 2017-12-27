import { StarshipsService } from './starships.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  formulario: any;
  rota: string = 'starships';


  constructor(
    private starShipsService: StarshipsService,
    private http: Http
  ){}

  ngOnInit() {
    this.formulario = {
      count: null,
      next: null,
      previous: null,
      results: null

    };

    this.starShipsService.getStarships().subscribe((starships: any)=>this.formulario= starships);
  }



}
