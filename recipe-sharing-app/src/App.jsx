import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Updated import
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <header>
          <h1 className="text-3xl font-bold">Recipe Sharing App</h1>
          <nav>
            <ul className="flex space-x-4 mb-4">
              <li>
                <Link to="/" className="text-blue-500">Home</Link>
              </li>
              <li>
                <Link to="/favorites" className="text-blue-500">Favorites</Link>
              </li>
              <li>
                <Link to="/recommendations" className="text-blue-500">Recommendations</Link>
              </li>
            </ul>
          </nav>
        </header>

        <SearchBar /> {/* Search bar remains at the top */}
        
        {/* Updated Routes component */}
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Main recipe list page */}
          <Route path="/favorites" element={<FavoritesList />} /> {/* Favorites list page */}
          <Route path="/recommendations" element={<RecommendationsList />} /> {/* Recommendations list page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;










