import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  state: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemsQuantity: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartItemTotal: 0,
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
const removeCartItem = (cartItems, productToTakeout) => {
  if (productToTakeout.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToTakeout.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem
    );
  } else {
    return cartItems.filter((cartItem) => cartItem.id !== productToTakeout.id);
  }
};
const clearCartItem = (cartItems, productToclear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToclear.id);
};

const calcItemQuantity = (cartItems) => {
  const itemQuantity = cartItems.reduce(
    (accumulator, currentItem) => accumulator + currentItem.quantity,
    0
  );
  return itemQuantity;
};
const calculateTotal = (cartItems) => {
  const itemTotal = cartItems.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.quantity * currentItem.price,
    0
  );
  return itemTotal;
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  const [cartItemTotal, setItemTotal] = useState(0);

  useEffect(() => {
    setCartItemsQuantity(calcItemQuantity(cartItems));
    setItemTotal(calculateTotal(cartItems));
  }, [cartItems]);
  useEffect(() => {
    setItemTotal(calculateTotal(cartItems));
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToDecrease) => {
    setCartItems(removeCartItem(cartItems, productToDecrease));
  };
  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartItemsQuantity,
    removeItemFromCart,
    clearItemFromCart,
    cartItemTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
