// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = async () => {
    setError('');
    setUserData(null);
    if (!searchInput.trim()) {
      setError('Please enter a GitHub username.');
      return;
    }
    try {
      const data = await fetchUserData(searchInput.trim());
      setUserData(data);
    } catch (err) {
      setError('User not found or error fetching data.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <img src={userData.avatar_url} alt={userData.login} />
          {/* Display other user details as needed */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
