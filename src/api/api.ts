// api.js
import axios from 'axios';

// Load environment variables from .env file
require('dotenv').config();

// Create a new instance of axios with the base URL from .env
export const api = axios.create({
  baseURL: process.env.BASE_URL,
});
 
