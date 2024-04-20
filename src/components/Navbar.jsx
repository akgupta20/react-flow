import React from "react";
import styles from "./Navbar.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navbar}>
        <span className={styles.navbarText}>
          ReactFlow Render - {""}
          <span
            className={styles.name}
          >
             Akash Gupta
          </span>
        </span>
      </div>
      <ToastContainer
        autoClose={ 2000} />
    </div>
  );
};

export default Navbar;
