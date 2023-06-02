import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllCategory = createAsyncThunk('getAllCategory', async () => {
  const response = await axios.get('http://localhost:5000/api/categories');
  return response.data;
});

