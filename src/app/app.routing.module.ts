import { NgModule } from "@angular/core";

import { ModuleWithProviders } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
    {path: 'characters', loadChildren: 'app/characters/characters.module#CharactersModule'},
    {path: 'starships', loadChildren: 'app/starships/starships.module#StarshipsModule'},
    {path: '', loadChildren: 'app/characters/characters.module#CharactersModule'}

];




//rota de módulos da aplicação
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]//exportando diretivas
})
export class AppRoutingModule {

}