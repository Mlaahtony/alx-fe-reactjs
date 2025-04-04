import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available right now.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id} className="p-2 border rounded mb-2">
            <h3 className="text-lg font-semibold">{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
