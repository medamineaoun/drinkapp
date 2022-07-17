import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { CocktailSearchComponent } from './pages/cocktail-search/cocktail-search.component';

const routes: Routes = [
  {path:'',redirectTo:'categories', pathMatch:'full'},
  {path:'categories', component:CategoriesComponent},
  {path:'categorie/cocktails/:nomC', component:CocktailListComponent},
  {path:'cocktails/details/:idC', component:CocktailDetailsComponent},
  {path:'cocktail/search',component:CocktailSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
