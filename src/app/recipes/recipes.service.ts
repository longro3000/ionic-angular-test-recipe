import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schinitzel',
      imageUrl: 'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients: ['Pork', 'French Fries']
    },
    {
      id: 'r2',
      title: 'Pho',
      imageUrl: 'http://adcentricity.com/wp-content/uploads/2019/06/Ph%C6%A1%CC%89.jpg',
      ingredients: ['Beef', 'Rice Noodle', 'Beef soup']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return { ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes =  this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
