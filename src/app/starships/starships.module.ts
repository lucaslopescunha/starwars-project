import { RouterModule } from '@angular/router';
import { GridPesquisaModule } from './../grid-pesquisa/grid-pesquisa.module';
import { StarshipsRoutingModule } from './starships.routing.module';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarshipsComponent } from './starships.component';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';
import { StarshipsService } from './starships.service';

@NgModule({
  imports: [
    RouterModule, 
    CommonModule,
    StarshipsRoutingModule,
    GridPesquisaModule,
    HttpModule
  ],
  exports: [ StarshipsComponent ],
  declarations: [
    StarshipsComponent,
    StarshipsDetailComponent
  ],
  providers: [StarshipsService]
})
export class StarshipsModule { }
