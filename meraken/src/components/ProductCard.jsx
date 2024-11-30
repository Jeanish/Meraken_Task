import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useCart();
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {!isInCart ? (
        <button className="cart-button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      ) : (
        <Link to="/cart" className="cart-button added">
          Go to Cart
        </Link>
      )}
      <Link to={`/product/${product.id}`} className="details-button">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
