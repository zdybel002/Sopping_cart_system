import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.container_logo}>
        <h3 className={styles.header_logo}>Shopping Cart</h3>
      </div>
      <div className={styles.header_btm}>Your card</div>
    </div>
  );
}

export default Header;
