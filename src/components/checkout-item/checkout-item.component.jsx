import { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  Arrow,
  Value,
  BaseSpan,
  RemoveButton,
  Quantity,
} from "./checkout-item.styles";
import { CartContext } from "../../contexts/cart-dropdown.context";

const CheckoutItem = ({ checkoutItem }) => {
  const { name, quantity, imageUrl, price } = checkoutItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(checkoutItem);
  const addItemHandler = () => addItemToCart(checkoutItem);
  const removeItemHandler = () => removeItemFromCart(checkoutItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>

      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{quantity * price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
