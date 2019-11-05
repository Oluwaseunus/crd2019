import {
  ADD_ITEM,
  TOGGLE_CART_HIDDEN,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM
} from './cart.types';

import { addItemToCart, removeItemFromCart } from './cart.utils';

const initialState = {
  hidden: true,
  cartItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    }

    case CLEAR_ITEM_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter(({ id }) => id !== action.payload.id)
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    }

    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    default:
      return state;
  }
};
