// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = async () => {
    setError('');
    setUserData(null);
    setRepos([]);
    if (!searchInput.trim()) {
      setError('Please enter a GitHub username.');
      return;
    }
    try {
      const { user, repos } = await fetchUserData(searchInput.trim());
      setUserData(user);
      setRepos(repos);
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
          <p><strong>Location:</strong> {userData.location}</p>
          <img src={userData.avatar_url} alt={userData.login} />
        </div>
      )}
      {repos.length > 0 && (
        <div>
          <h3>Repositories:</h3>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
                : {repo.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;


