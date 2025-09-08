import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/Context";
import "./Cart.css";
import { useNavigate } from "react-router";

const Cart = () => {
  const { food_list, cartItems, addTocart, removeFromCart } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  // calculate subtotal
  const subtotal = Object.entries(cartItems).reduce((acc, [id, qty]) => {
    const item = food_list.find((f) => f._id === id);
    return acc + (item ? item.price * qty : 0);
  }, 0);

  // apply promo
  const applyPromo = () => {
    if (promoCode === "FOOD10") {
      setDiscount(subtotal * 0.1);
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const total = subtotal - discount;

   // 🚀 Auto redirect to home if cart empty
   useEffect(() => {
    if (Object.keys(cartItems).length === 0) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 5000);

      return () => clearTimeout(timer); // cleanup
    }
  }, [cartItems, navigate]);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-content">
        {/* LEFT: Cart Items */}
        <div className="cart-items">
          {Object.keys(cartItems).length === 0 ? (
            <div>
              <p className="empty">Your cart is empty</p>
            </div>
          ) : (
            food_list
              .filter((item) => cartItems[item._id])
              .map((item) => (
                <div className="cart-item" key={item._id}>
                  <img src={item.image} alt={item.name} className="cart-img" />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="cart-actions">
                    <button onClick={() => removeFromCart(item._id)}>-</button>
                    <span>{cartItems[item._id]}</span>
                    <button onClick={() => addTocart(item._id)}>+</button>
                  </div>
                  <p className="cart-total">${(item.price * cartItems[item._id]).toFixed(2)}</p>
                  {/* <button className="remove-btn" onClick={() => removeFromCart(item._id)}>✕</button> */}
                </div>
              ))
          )}
        </div>

        {/* RIGHT: Summary */}
        <div className="cart-summary">
          <div className="promo">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={applyPromo}>Apply</button>
          </div>
          <div className="summary-details">
            <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
            <p>Discount: <span>-${discount.toFixed(2)}</span></p>
            <h3>Total: <span>${total.toFixed(2)}</span></h3>
          </div>
          <button className="checkout-btn">Continue to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
