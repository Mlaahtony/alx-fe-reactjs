import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      ...recipe,
      title,
      description
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <h3 className="text-lg font-semibold">Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        placeholder="Recipe Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
        placeholder="Recipe Description"
      />
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;


