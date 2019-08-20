import { createSelector } from 'reselect';

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  ({ cartItems }) => cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  ({ hidden }) => hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, { price, quantity }) => acc + price * quantity, 0)
);
