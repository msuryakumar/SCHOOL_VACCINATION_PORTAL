// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Assuming backend is running on port 5000
});

export const login = (data) => api.post('/auth/login', data);

export const getUpcomingDrives = () => api.get('/drives/upcoming');

export const createDrive = (data) => api.post('/drives', data);

export const getStudents = () => api.get('/students');

export const addOrUpdateStudent = (data) => api.post('/students', data);

export const generateReport = (filters) => api.get('/students', { params: filters });
