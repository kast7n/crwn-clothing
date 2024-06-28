import { useContext } from "react";
import { CartContext } from "../../contexts/cart-dropdown.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  Total,
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./checkout.styles";
const CheckOut = () => {
  const { cartItems, cartItemTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
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
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} checkoutItem={item} />
      ))}
      <Total>Total: ${cartItemTotal}</Total>
    </CheckoutContainer>
  );
};

export default CheckOut;
