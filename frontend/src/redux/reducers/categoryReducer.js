import { combineReducers } from "redux";

import { GET_CATEGORIES_ONLY_NAME_FAIL, GET_CATEGORIES_ONLY_NAME_REQUEST, GET_CATEGORIES_ONLY_NAME_SUCCESS } from "../constants/categoryConstants";


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


  const categoryReducer = combineReducers({
    getCategoriesName : getCategoriesNameReducer
  })

  export default categoryReducer