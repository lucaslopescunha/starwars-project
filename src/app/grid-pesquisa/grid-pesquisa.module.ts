import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridPesquisaComponent } from './grid-pesquisa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    GridPesquisaComponent
  ],
  exports: [GridPesquisaComponent,RouterModule ]
})
export class GridPesquisaModule { }

