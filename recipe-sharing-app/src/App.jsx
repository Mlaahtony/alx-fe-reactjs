import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;






