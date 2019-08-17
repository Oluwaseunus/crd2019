import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cart.types';

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});
