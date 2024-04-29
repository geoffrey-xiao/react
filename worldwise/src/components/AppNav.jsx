import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import Logo from "./Logo";
const AppNav = () => {
  return (
    <nav className={styles.nav}>
      {/* <Logo /> */}
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
