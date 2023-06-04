import { combineReducers } from "redux";
import { CREATE_DONATION_FAIL, CREATE_DONATION_REQUEST, CREATE_DONATION_RESET, CREATE_DONATION_SUCCESS } from "../constants/donationConstants";


export const createDonationReducer = (
    state = {message :"" , donation : {}},
    action
  ) => {
    switch (action.type) {
      case CREATE_DONATION_REQUEST:
        return { ...state, loading: true };
  
      case CREATE_DONATION_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
            message : action.payload.message,

          donation: action.payload.data,
        };
  
      case CREATE_DONATION_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload,
        };

    
        case CREATE_DONATION_RESET:
            return {
              ...state,
             
              success: false,
         
            };
      default:
        return state;
    }
  };

  const donationReducer = combineReducers({
    createDonation : createDonationReducer
  })

  export default donationReducer