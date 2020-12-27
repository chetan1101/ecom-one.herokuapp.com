import { ADD_TO_CART, CART_SAVE_PAYMENT, CART_SAVE_SHIIPPING, REMOVE_FROM_CART } from "../Actions/actionTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find((x) => x._id === item._id);

      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x._id === product._id ? item : x
          )
        };
      }
      return {
        cartItems: [...state.cartItems, item],
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };

    case CART_SAVE_SHIIPPING:
      return{
        ...state,
        shipping: action.payload
      }
      case CART_SAVE_PAYMENT:
        return{
          ...state,
          payment: action.payload
        }

    default:
      return state;
  }
};
