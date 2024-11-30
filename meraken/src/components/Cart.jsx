import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Cart Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="back-button" onClick={() => navigate(-1)}>
             Back
            </button>
            <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
