import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";
const CheckOut = () => {
  const { cartItems, cartItemTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item} />
      ))}
      <span className="total">Total: ${cartItemTotal}</span>
    </div>
  );
};

export default CheckOut;
