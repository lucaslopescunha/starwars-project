import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { NgModule } from '@angular/core';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

const charactersRoutes: Routes = [
    { path: '', component: CharactersComponent},
    { path: ':id', component: CharacterDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(charactersRoutes)],
    exports: [RouterModule]
})
export class CharactersRoutingModule { }