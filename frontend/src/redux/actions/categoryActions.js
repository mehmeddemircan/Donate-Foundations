import axios from "axios";

import { GET_CATEGORIES_ONLY_NAME_FAIL, GET_CATEGORIES_ONLY_NAME_REQUEST, GET_CATEGORIES_ONLY_NAME_SUCCESS } from "../constants/categoryConstants";

export const GetCategoriesName = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_CATEGORIES_ONLY_NAME_REQUEST,
      });
  
      const { data } = await axios.get(
        `http://localhost:5000/api/categories`
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