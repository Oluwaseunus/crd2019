export const addItemToCart = (cart, item) =>
  cart.find(({ id }) => id === item.id)
    ? cart.map(el =>
        el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
      )
    : [...cart, { ...item, quantity: 1 }];
