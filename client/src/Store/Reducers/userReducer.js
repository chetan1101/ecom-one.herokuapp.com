import { GET_REGISTER_FAIL, GET_REGISTER_REQUEST, GET_REGISTER_SUCCESS, GET_SIGNIN_FAIL, GET_SIGNIN_REQUEST, GET_SIGNIN_SUCCESS,GET_SIGNOUT } from "../Actions/actionTypes";

export const userSigninReducer = (state={}, action) => {
    switch (action.type) {
        case GET_SIGNIN_REQUEST:
            return{
                loading:true
            }
        case GET_SIGNIN_SUCCESS:
            return{
                loading:false,
                userInfo:action.payload
            }
        case GET_SIGNIN_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case GET_SIGNOUT:
            return{}
        default:
            return state;
    }
}

export const userRegisterReducer = (state={}, action) => {
    switch (action.type) {
        case GET_REGISTER_REQUEST:
            return{
                loading:true
            }
        case GET_REGISTER_SUCCESS:
            return{
                loading:false,
                userInfo:action.payload
            }
        case GET_REGISTER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}