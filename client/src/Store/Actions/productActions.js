import Axios from "axios";
import Cookie from "js-cookie";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_SAVE_REQUEST,
  PRODUCT_SAVE_SUCCESS,
  PRODUCT_SAVE_FAIL,
  PRODUCT_EDIT_REQUEST,
  PRODUCT_EDIT_SUCCESS,
  PRODUCT_EDIT_FAIL,
  PRODUCT_DEL_REQUEST,
  PRODUCT_DEL_SUCCESS,
  PRODUCT_DEL_FAIL,
} from "./actionTypes";

export const getProductList = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await Axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.massage });
  }
};

export const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error });
  }
};

export const addNewProduct = (product) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
    const userInfo = Cookie.getJSON("userInfo");

    const { data } = await Axios.post("/api/products", product,{
        headers: { Authorization: "Bearer " + userInfo.token },
      }
    );
    dispatch({ type: PRODUCT_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_SAVE_FAIL, payload: error.msg });
  }
};

export const editProduct = (productId, product) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_EDIT_REQUEST, payload: productId });
    const userInfo = Cookie.getJSON("userInfo");

    const { data } = await Axios.put("/api/products/" + productId, product,{
        headers: { Authorization: "Bearer " + userInfo.token },
      }
    );
    dispatch({ type: PRODUCT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_EDIT_FAIL, payload: error.msg });
  }
};

export const delProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DEL_REQUEST, payload: productId });
    const userInfo = Cookie.getJSON("userInfo");

    const { data } = await Axios.delete("/api/products/" + productId,{
        headers: { Authorization: "Bearer " + userInfo.token },
      }
    );
    dispatch({ type: PRODUCT_DEL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DEL_FAIL, payload: error.msg });
  }
};

