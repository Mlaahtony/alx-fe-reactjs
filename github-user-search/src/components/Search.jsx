// src/components/Search.jsx
import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [users, setUsers] = useState([]); // State to store user data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchUserData();
        setUsers(data);
      } catch {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="w-full max-w-md mx-auto">
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
                  {user.name || user.login}
                </h2>
                <p>Login: {user.login}</p>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Public Repos: {user.public_repos}</p>
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


