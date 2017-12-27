import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-pesquisa',
  templateUrl: './grid-pesquisa.component.html',
  styleUrls: ['./grid-pesquisa.component.css']
})
export class GridPesquisaComponent implements OnInit {

  @Input('lista') listResults: any[];

  @Input() rota: any;

  constructor() { 
  }

  ngOnInit() {
  }

  getUrl(result: any) {

    let id = result.url.match('[0-9]+')[0];
    return id;
  }

}
