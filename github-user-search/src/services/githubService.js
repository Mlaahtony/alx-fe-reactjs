// src/services/githubService.js
import axios from 'axios';

const BASE_URL = "https://api.github.com/users?q";
const SEARCH_URL = "https://api.github.com/search/users?q";
const HEADERS = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
};

export const fetchUserData = async (username) => {
  try {
    const userResponse = await axios.get(`${BASE_URL}/${username}`, { headers: HEADERS });
    const reposResponse = await axios.get(`${BASE_URL}/${username}/repos`, { headers: HEADERS });
    return { user: userResponse.data, repos: reposResponse.data };
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
};

export const searchUsers = async (location = '', minRepos = 0) => {
  try {
    const locationQuery = location ? `location:${encodeURIComponent(location)}` : '';
    const reposQuery = minRepos > 0 ? `repos:>=${minRepos}` : '';
    const query = [locationQuery, reposQuery].filter(Boolean).join('+');

    const response = await axios.get(SEARCH_URL, {
      headers: HEADERS,
      params: { q: query, per_page: 30 },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error searching GitHub users:', error);
    throw error;
  }
};
