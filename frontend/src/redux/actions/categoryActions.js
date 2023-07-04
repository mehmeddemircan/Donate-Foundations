import axios from "axios";

import { GET_CATEGORIES_ONLY_NAME_FAIL, GET_CATEGORIES_ONLY_NAME_REQUEST, GET_CATEGORIES_ONLY_NAME_SUCCESS, GET_CATEGORY_DETAILS_FAIL, GET_CATEGORY_DETAILS_REQUEST, GET_CATEGORY_DETAILS_SUCCESS } from "../constants/categoryConstants";

export const GetCategoriesName = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_CATEGORIES_ONLY_NAME_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://vakifbagisapi.onrender.com/api/categories`
      );
  
      dispatch({
        type: GET_CATEGORIES_ONLY_NAME_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORIES_ONLY_NAME_FAIL,
        error: error.response,
      });
    }
  };

  export const GetCategoryDetails = (categoryId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_CATEGORY_DETAILS_REQUEST,
      });
  
      const { data } = await axios.get(
        `https://vakifbagisapi.onrender.com/api/categories/${categoryId}/details`
      );
  
      dispatch({
        type: GET_CATEGORY_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_DETAILS_FAIL,
        error: error.response,
      });
    }
  };