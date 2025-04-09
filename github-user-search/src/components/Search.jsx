// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
      setUsername('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md gap-2"
    >
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};
export default SearchBar;
