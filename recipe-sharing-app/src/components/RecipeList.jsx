import React from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeDetails from './RecipeDetails';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <RecipeDetails key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;








