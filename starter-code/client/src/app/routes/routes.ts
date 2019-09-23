import { ListRecipesComponent } from "app/list-recipes/list-recipes.component";
import { Routes } from '@angular/router'
import { SingleRecipeComponent } from "app/single-recipe/single-recipe.component";


export const routes: Routes = [
    { path: '', component: ListRecipesComponent },
    { path: ':id', component: SingleRecipeComponent },
  
  ]