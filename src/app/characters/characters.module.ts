import { RouterModule } from '@angular/router';
import { GridPesquisaModule } from './../grid-pesquisa/grid-pesquisa.module';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from './characters.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarshipsRoutingModule } from '../starships/starships.routing.module';
import { StarshipsModule } from '../starships/starships.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CharactersRoutingModule,
    GridPesquisaModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    CharactersComponent,
    CharacterDetailComponent],
  declarations: [
    CharactersComponent,
    CharacterDetailComponent
  ],
  providers: [CharactersService]
})
export class CharactersModule { }
