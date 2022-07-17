import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  details=[]
  id:any
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['idC']
    this.getCocktailsDetails()
  }
  getCocktailsDetails(){
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+this.id)
    .then(res =>{
      console.log(res.data.drinks)
      this.details=res.data.drinks
    })
    .catch(err =>{
      console.log(err)
    })
  }
}
