import { combineReducers } from "redux";

import { GET_CATEGORIES_ONLY_NAME_FAIL, GET_CATEGORIES_ONLY_NAME_REQUEST, GET_CATEGORIES_ONLY_NAME_SUCCESS, GET_CATEGORY_DETAILS_FAIL, GET_CATEGORY_DETAILS_REQUEST, GET_CATEGORY_DETAILS_SUCCESS } from "../constants/categoryConstants";


  export const getCategoriesNameReducer = (
    state = {categories : []},
    action
  ) => {
    switch (action.type) {
      case GET_CATEGORIES_ONLY_NAME_REQUEST:
        return { ...state, loading: true };
  
      case GET_CATEGORIES_ONLY_NAME_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
         
          categories: action.payload.data,
        };
  
      case GET_CATEGORIES_ONLY_NAME_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export const getCategoryDetailsReducer = (
    state = {category : {}},
    action
  ) => {
    switch (action.type) {
      case GET_CATEGORY_DETAILS_REQUEST:
        return { ...state, loading: true };
  
      case GET_CATEGORY_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
         
          category: action.payload.data,
        };
  
      case GET_CATEGORY_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };


  const categoryReducer = combineReducers({
    getCategoriesName : getCategoriesNameReducer,
    getCategoryDetails : getCategoryDetailsReducer
  })

  export default categoryReducer