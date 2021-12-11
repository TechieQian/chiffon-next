import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import cn from "classnames";

const NavLink = ({ label, link }: any) => (
  <div className={cn("navbar-item", styles.navItem)}>
    <i className={`${styles.icon} icon fas fa-paw`}></i>
    <Link href={link}>{label}</Link>
  </div>
);

function Navigation() {
  return (
    <nav
      className={`${styles.nav} navbar`}
      style={{ margin: "5px 0" }}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu container ">
        <div className="navbar-start">
          <NavLink label="About Me" link="/about" />
          <NavLink label="Shop My Codes" link="/shop" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
