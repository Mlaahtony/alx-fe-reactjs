import { useState } from 'react';

const AddRecipeForm = ({ addRecipe }) => {
  // State to hold the form data and validation errors
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [steps, setSteps] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    steps: ''
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {
      title: '',
      ingredients: '',
      instructions: '',
      steps: '',
    };

    // Check if fields are empty
    if (!title) newErrors.title = 'Title is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    if (!instructions) newErrors.instructions = 'Instructions are required.';
    if (!steps) newErrors.steps = 'Steps are required.';
    else {
      // Check if there are at least 2 ingredients
      if (ingredients.split('\n').length < 2) {
        newErrors.ingredients = 'Please list at least two ingredients.';
      }
    }

    // Set error states
    setErrors(newErrors);

    // If no errors, submit the form
    if (!newErrors.title && !newErrors.ingredients && !newErrors.instructions && !newErrors.steps) {
      const newRecipe = {
        id: Date.now(),  // Unique ID using current timestamp
        title,
        summary: ingredients.slice(0, 100),  // Summary of ingredients
        ingredients: ingredients.split('\n'),  // Split ingredients into an array
        instructions,
        steps: steps.split('\n'),  // Split steps into an array for better data structure
        image: image || 'https://via.placeholder.com/150',  // Default image if not provided
      };

      addRecipe(newRecipe);

      // Clear the form
      setTitle('');
      setIngredients('');
      setInstructions('');
      setSteps('');
      setImage('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-blue-600">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-gray-700 text-sm font-medium">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-gray-700 text-sm font-medium">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients (separate each ingredient with a new line)"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div>
          <label htmlFor="instructions" className="block text-gray-700 text-sm font-medium">Preparation Instructions</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the preparation instructions"
          />
          {errors.instructions && <p className="text-red-500 text-sm mt-2">{errors.instructions}</p>}
        </div>

        {/* Steps */}
        <div>
          <label htmlFor="steps" className="block text-gray-700 text-sm font-medium">Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            required
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter cooking steps (separate each step with a new line)"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-2">{errors.steps}</p>}
        </div>

        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block text-gray-700 text-sm font-medium">Recipe Image URL (Optional)</label>
          <input
            type="url"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL (e.g. https://via.placeholder.com/150)"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};
export default AddRecipeForm;



