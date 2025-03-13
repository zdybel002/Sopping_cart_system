import React from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul className={styles.product_list}>
        {products.map((product) => (
          <li>
            <ProductItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
