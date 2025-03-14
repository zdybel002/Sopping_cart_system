import React from "react";
import "./ProductItem.css"

const ProductItem = ({ product, addToCart }) => {
  return (
    <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
    </div>
  );
};

export default ProductItem;
