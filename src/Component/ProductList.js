import React from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import Wrap from "./Design/Wrap"

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
            <Wrap>
                  <ProductItem
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
            </Wrap>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
