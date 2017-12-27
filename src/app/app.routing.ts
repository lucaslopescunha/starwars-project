import { StarshipsComponent } from './starships/starships.component';
import { CharactersComponent } from './characters/characters.component';
import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { StarshipsDetailComponent } from './starships/starships-detail/starships-detail.component';

export const APP_ROUTES: Routes = [
    { path: 'characters', component: CharactersComponent },
    { path: 'starships', component: StarshipsComponent }
    

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
//Router.forRoot é pra rota raiz ... Router.forChild...