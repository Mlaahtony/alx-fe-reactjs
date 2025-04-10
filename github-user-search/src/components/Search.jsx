// src/components/Search.jsx
import React, { useState, useEffect } from 'react';
import { searchUsers } from '../services/githubService';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(0);
  const [minFollowers, setMinFollowers] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await searchUsers(location, minRepos, minFollowers);
        setUsers(data);
      } catch {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [location, minRepos, minFollowers]); // Refetch when any search criteria change

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="p-2 rounded border border-gray-300 mb-2 w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(Number(e.target.value))}
          placeholder="Minimum public repos"
          className="p-2 rounded border border-gray-300 mb-2 w-full"
        />
        <input
          type="number"
          value={minFollowers}
          onChange={(e) => setMinFollowers(Number(e.target.value))}
          placeholder="Minimum followers"
          className="p-2 rounded border border-gray-300 w-full"
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-white rounded shadow">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {user.login}
                </h2>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Public Repos: {user.public_repos}</p>
                <p>Followers: {user.followers}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Search;
