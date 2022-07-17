import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  styleUrls: ['./cocktail-search.component.scss']
})
export class CocktailSearchComponent implements OnInit {
  cocktail=[]
  constructor() { }

  ngOnInit(): void {
  }
  searchCocktail(search:any){
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+search)
    .then(res => {
      console.log(res.data.drinks)
      this.cocktail=res.data.drinks
    })
    .catch(err => {
      console.log(err)
    })
  }
}
