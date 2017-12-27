import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'grid-pesquisa',
  templateUrl: './grid-pesquisa.component.html',
  styleUrls: ['./grid-pesquisa.component.css']
})
export class GridPesquisaComponent implements OnInit {

  @Input('lista') lista: any[];

  @Input() rota: any;

  constructor() { 
  }

  ngOnInit() {
  }



}
