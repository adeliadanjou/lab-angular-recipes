import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RecipeService}  from '../services/recipe.service'

@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
dish: Object
  constructor(private route: ActivatedRoute, public recipeService: RecipeService) { }

  ngOnInit() {

    this.route.params.subscribe(params => this.recipeService.getDish(params.id).subscribe(dish => this.dish = dish)
    )
  }

}
