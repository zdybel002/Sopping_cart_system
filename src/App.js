import React, { useState } from "react";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import Header from "./Component/Header/Header";

import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  // List of products to display
  const products = [
    { id: 1, name: "Banana", price: 20 },
    { id: 2, name: "Apple", price: 30 },
    { id: 3, name: "Orange", price: 40 },
  ];

  // Add product to cart (with quantity check)
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Find the product in the cart
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product exists, map over the cart and update the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product is new, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
