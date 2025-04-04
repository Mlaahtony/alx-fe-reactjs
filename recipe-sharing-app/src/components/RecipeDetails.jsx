import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === id));

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p className="mb-4">{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;


