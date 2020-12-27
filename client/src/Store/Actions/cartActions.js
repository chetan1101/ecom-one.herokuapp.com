import Axios from "axios"
import Cookie from "js-cookie";
import { ADD_TO_CART, CART_SAVE_SHIIPPING, REMOVE_FROM_CART, CART_SAVE_PAYMENT } from "./actionTypes";

export const addToCart = (productId, Qty) => async (dispatch, getState) => {
    try {
        const {data} = await Axios.get(`/api/products/${productId}`);
        dispatch({type:ADD_TO_CART, payload: {
            _id: data._id,
            name: data.name,
            image:data.image,
            price:data.price,
            qty:data.qty,
            Qty
        }});
        const {cart:{cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        
    }
}

export const removeFromCart = (productId) => (dispatch, getState) => {
    try {
        dispatch({type:REMOVE_FROM_CART, payload:productId});
        const {cart:{cartItems}} = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {
        
    }
}

export const saveShipping = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_SHIIPPING, payload: data})
}

export const savePayment = (data) => (dispatch) => {
    dispatch({type: CART_SAVE_PAYMENT, payload: data})
}