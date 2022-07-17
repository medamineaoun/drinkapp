import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {
  nom:any
  cocktails=[]
  constructor(private route:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.nom=this.route.snapshot.params["nomC"]
    console.log(this.nom)
    this.getCocktailsByCategorie()
  }
  getCocktailsByCategorie(){
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+this.nom)
    .then(res => {
      console.log(res.data)
      this.cocktails=res.data.drinks
    })
    .catch(err => {
      console.log(err)
    })
  }
  
}
