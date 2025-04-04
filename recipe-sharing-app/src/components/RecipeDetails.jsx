import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;



