import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import categoryReducer from "./reducers/categoryReducer";
import { authReducer } from "./reducers/authReducer";
import donationReducer from "./reducers/donationReducer";
import stripePaymentReducer from "./reducers/stripeReducer";




const rootReducer = combineReducers({
    auth : authReducer,
    category : categoryReducer,
    donation : donationReducer,
    stripePayment : stripePaymentReducer
 
})

const initialState = {}

const middleware = [thunk];



const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;