import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { CocktailSearchComponent } from './pages/cocktail-search/cocktail-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
