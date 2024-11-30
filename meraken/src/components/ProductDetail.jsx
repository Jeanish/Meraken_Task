import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import data from "../data/data.json";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const product = data.find((item) => item.id === parseInt(id));
  const isInCart = cartItems.some((item) => item.id === product?.id);

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(-1);  // Navigate back to the previous page
  };

  return (
    isModalOpen && (
      <div className="modal-overlay">
        <div className="product-detail-modal">
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          {product ? (
            <>
              <img src={product.image} alt={product.name} />
              <h1>{product.name}</h1>
              <p>Price: ${product.price}</p>
              <p>{product.description}</p>
              {!isInCart ? (
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              ) : (
                <button
                  className="add-to-cart-btn added"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </button>
              )}
            </>
          ) : (
            <p>Product not found</p>
          )}
        </div>
      </div>
    )
  );
};

export default ProductDetail;
