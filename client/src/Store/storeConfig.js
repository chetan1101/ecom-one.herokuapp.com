import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import { cartReducer } from "./Reducers/cartReducer";
import {
  productDeleteReducer,
  productDetailsReducer,
  productEditReducer,
  productListReducer,
  productSaveReducer,
} from "./Reducers/productReducers";
import { userRegisterReducer, userSigninReducer } from "./Reducers/userReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  cart: {cartItems},
  userInfo: { userInfo },
};

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  newUserRegister: userRegisterReducer,
  productSave:productSaveReducer,
  productEdit:productEditReducer,
  delProduct:productDeleteReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
