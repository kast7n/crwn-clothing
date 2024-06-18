import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  state: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemsQuantity: 0,
  increaseCartItem: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  const cartItem = cartItems.find((product) => product.id === productToAdd.id);
  if (cartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const calcItemQuantity = (cartItems) => {
  const itemQuantity = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );
  return itemQuantity;
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);

  useEffect(() => {
    setCartItemsQuantity(calcItemQuantity(cartItems));
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartItemsQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
