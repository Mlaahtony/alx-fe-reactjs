import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { v4 as uuidv4 } from 'uuid';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const addRecipe = useRecipeStore(state => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: uuidv4(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border p-2 w-full"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;


