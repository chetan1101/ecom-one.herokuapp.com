import {
  PRODUCT_DEL_FAIL,
  PRODUCT_DEL_REQUEST,
  PRODUCT_DEL_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
} from "../Actions/actionTypes";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loding: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productSaveReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_SAVE_REQUEST:
      return {
        loading: true,
      };
    case PRODUCT_SAVE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload,
      };
    case PRODUCT_SAVE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const productEditReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_EDIT_REQUEST:
      return{
        ...state,
        loading:true
      }
    case PRODUCT_EDIT_SUCCESS:
      return{
        ...state,
        loading:false,
        product:action.payload
      }
    case PRODUCT_EDIT_FAIL:
      return{
        ...state,
        loading:false,
        error:action.payload
      }
  
    default:
      return state;
  }
};

export const productDeleteReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DEL_REQUEST:
      return{
        ...state,
        loading:true
      }
    case PRODUCT_DEL_SUCCESS:
      return{
        ...state,
        loading:false,
        product:action.payload,
        delSuccess:true
      }
    case PRODUCT_DEL_FAIL:
      return{
        ...state,
        loading:false,
        error:action.payload
      }
  
    default:
      return state;
  }
};
