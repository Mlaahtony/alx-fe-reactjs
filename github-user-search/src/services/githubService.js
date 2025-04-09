// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';
const HEADERS = {
  Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
};

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, { headers: HEADERS });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};

