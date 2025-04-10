import { useState } from 'react';
import AddRecipeForm from './AddRecipeForm';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import recipesData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState(recipesData);

  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Recipe Sharing Platform</h1>
      
      {/* Add Recipe Form Component */}
      <AddRecipeForm addRecipe={addRecipe} />

      {/* Display Recipe List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:scale-105"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block mt-4 text-blue-500 hover:underline text-sm font-medium"
              >
                View Recipe →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
