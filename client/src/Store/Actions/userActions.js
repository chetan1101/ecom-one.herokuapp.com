import Axios from "axios";
import Cookie from 'js-cookie';
import { GET_REGISTER_FAIL, GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS, GET_SIGNIN_FAIL, GET_SIGNIN_REQUEST, GET_SIGNIN_SUCCESS } from "./actionTypes";

export const userSignIn = (email, password) => async (dispatch) => {
  dispatch({ type: GET_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin",{email,password});
    dispatch({type:GET_SIGNIN_SUCCESS, payload:data})
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
      dispatch({type:GET_SIGNIN_FAIL, payload: error.msg})
  }
};

export const userRegister = (name, email, password) => async (dispatch) => {
  dispatch({type: GET_REGISTER_REQUEST, payload:{name, email, password}});
  try {
    const {data} = await Axios.post("/api/users/register", {name, email, password});
    dispatch({type:GET_REGISTER_SUCCESS, payload:data});
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({type:GET_REGISTER_FAIL, payload: error.msg})
  }
}