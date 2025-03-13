import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <div className="cart_items">
        {cart.length === 0 ? (<p>Your cart is empty.</p>) : (cart.map((product) => (
            <div key={product.id} className="cart-item">
                <h3>{product.name}</h3>
                <p>${product.price} x {product.quantity}</p>
              
              {/* Show quantity here */}
              <button onClick={() => removeFromCart(product.id)} className="remove-from-cart-btn">
                  Remove from Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
