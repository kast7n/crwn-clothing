import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemsQuantity } =
    useContext(CartContext);
  const toggleIsCarOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCarOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsQuantity}</span>
    </div>
  );
};

export default CartIcon;
