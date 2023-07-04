import axios from "axios";
import { STRIPE_APPLY_FAIL, STRIPE_APPLY_REQUEST, STRIPE_APPLY_SUCCESS } from "../constants/stripeConstants";

export const CreatePaymentIntent =  (stripeItem) => async(dispatch) => {

    try {

        dispatch({type: STRIPE_APPLY_REQUEST})

   

        
        const {data }=  await axios.post('https://vakifbagisapi.onrender.com/api/stripe-donate',stripeItem)
  
        //   dispatch success
          dispatch({
              type: STRIPE_APPLY_SUCCESS,
              payload : data
          })

    } catch (error) {
        dispatch({
            type: STRIPE_APPLY_FAIL,
            payload : error.response.data.error
        })
    }

    

}
