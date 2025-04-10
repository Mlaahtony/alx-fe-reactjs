// src/App.jsx
import React from 'react';
import Search from './components/Search';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">GitHub User Search</h1>
      <Search />
    </div>
  );
};

export default App;


