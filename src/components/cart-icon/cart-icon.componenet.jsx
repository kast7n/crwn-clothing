import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

import { CartContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsQuantity } =
    useContext(CartContext);
  const toggleIsCarOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCarOpen}>
      <ShoppingIcon />
      <ItemCount>{cartItemsQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
