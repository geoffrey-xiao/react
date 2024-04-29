import React from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
      <img src="/icon.png" alt="worldwise-logo" className={styles.logo} />
    </Link>
  );
};

export default Logo;
