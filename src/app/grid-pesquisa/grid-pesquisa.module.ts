import { GridUrlIdPipe } from './grid-url-id.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridPesquisaComponent } from './grid-pesquisa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GridPesquisaComponent,
    GridUrlIdPipe
  ],
  exports: [
    GridPesquisaComponent,
    RouterModule
  ]
})
export class GridPesquisaModule { }

