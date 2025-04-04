import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Recipes</h2>
      <ul className="space-y-2">
        {recipes.map(recipe => (
          <li key={recipe.id} className="border p-2">
            <Link to={`/recipes/${recipe.id}`} className="text-blue-600 hover:underline">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;







