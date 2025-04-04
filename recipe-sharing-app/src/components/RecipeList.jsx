import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map(recipe => (
          <div key={recipe.id} className="border p-4 mb-2 rounded shadow">
            <h3 className="text-xl font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="mt-2 space-x-2">
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 underline">View</Link>
              <Link to={`/edit/${recipe.id}`} className="text-yellow-500 underline">Edit</Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;










