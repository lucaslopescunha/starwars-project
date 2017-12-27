import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StarshipsComponent } from './starships.component';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';

const starshipRoutes: Routes = [

    { path: '', component: StarshipsComponent },
    { path: ':id', component: StarshipsDetailComponent }

];

export const starShipsRouter = RouterModule.forChild(starshipRoutes);
@NgModule({
    imports: [starShipsRouter],
    exports: [RouterModule]
})
export class StarshipsRoutingModule { }