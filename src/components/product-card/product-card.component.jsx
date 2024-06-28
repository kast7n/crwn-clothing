import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardName,
  ProductCardPrice,
} from "./product-card.styles";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer className="product-card-container">
      <img src={imageUrl} alt={name} />
      <ProductCardFooter className="footer">
        <ProductCardName className="name">{name}</ProductCardName>
        <ProductCardPrice className="price">{price}</ProductCardPrice>
      </ProductCardFooter>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
