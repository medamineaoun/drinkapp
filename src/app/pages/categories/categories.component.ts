import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories=[]
  constructor() { }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories(){
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    .then(res => {
      console.log(res)
      this.categories=res.data.drinks
    })
    .catch(err =>{
      console.log(err)
    })
  }
  verif(categories:any){
    if (categories.indexOf('/')==-1){
      return true
    }else{
      return false
    }
  }
}