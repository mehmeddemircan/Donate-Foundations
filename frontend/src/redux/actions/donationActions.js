import axios from 'axios'
import { CREATE_DONATION_FAIL, CREATE_DONATION_REQUEST, CREATE_DONATION_SUCCESS } from '../constants/donationConstants';
export const CreateDonation = (donation) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_DONATION_REQUEST,
      });
  
      const { data } = await axios.post(
        `https://vakifbagisapi.onrender.com/api/create-donation`,donation
      );
  
      dispatch({
        type: CREATE_DONATION_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_DONATION_FAIL,
        error: error.response,
      });
    }
  };