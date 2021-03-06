import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ListRecipesComponent } from './list-recipes/list-recipes.component';
import { routes } from './routes/routes';
import { RecipeService } from './services/recipe.service';
import { IngredientsService } from './services/ingredients.service';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    ListRecipesComponent,
    SingleRecipeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipeService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
