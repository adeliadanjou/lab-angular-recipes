import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service'

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent implements OnInit {
dishes: Array<Object> = []

  constructor(public recipeService: RecipeService) { }

  ngOnInit() {
   this.recipeService.getAllDishes()
   .subscribe((dishes) => {
     this.dishes = dishes;
   });

  }

}
