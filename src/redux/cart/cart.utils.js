export const addItemToCart = (cart, item) =>
  cart.find(({ id }) => id === item.id)
    ? cart.map(el =>
        el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
      )
    : [...cart, { ...item, quantity: 1 }];

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    ({ id }) => id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(({ id }) => id !== existingCartItem.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
