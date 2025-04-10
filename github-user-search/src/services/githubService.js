// src/services/githubService.js
import axios from 'axios';

const BASE_URL = "https://api.github.com/users?q";
const HEADERS = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
};

export const fetchUserData = async (username) => {
  try {
    // Fetch user profile data
    const userResponse = await axios.get(`${BASE_URL}/${username}`, { headers: HEADERS });

    // Fetch user repositories data
    const reposResponse = await axios.get(`${BASE_URL}/${username}/repos`, { headers: HEADERS });

    return { user: userResponse.data, repos: reposResponse.data };
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
};

