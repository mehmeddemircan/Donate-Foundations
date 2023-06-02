import { createSlice } from '@reduxjs/toolkit'
import { getAllCategory } from '../actions/categoryActions';

const initialState = {
    data : [],
    success : false ,
    loading : false ,
    error : null,
    message : null
}

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder
    .addCase(getAllCategory.pending,(state) => {
        state.loading = true;
    })
    .addCase(getAllCategory.fulfilled , (state,action) => {
        state.loading = false;
        state.success = true ; 
        state.data = action.payload.data;
        state.error = null 
    })
    .addCase(getAllCategory.rejected, (state,action) => {
        state.loading = false ;
        state.success = false ; 
        state.error = action.error.message
    })
    
  },
});



export default categorySlice.reducer