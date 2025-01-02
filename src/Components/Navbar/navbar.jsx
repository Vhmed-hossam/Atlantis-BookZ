import React from "react";
import styles from "./navbar.module.css";
import Text from './navtext.jsx'
import Side from './navtext.jsx'
export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar} sticky-top ${styles.navbg}`}>
      <div className="container p-3">
        <a className={`navbar-brand ${styles.brand} text-white`}>
          <Text Main="Atlantis BookZ"/>
        </a>
        <button
          className={`navbar-toggler ${styles.toggler} border-0`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className={`fa-solid fa-bars text-white`}></i>
        </button>
        <div className={`collapse navbar-collapse ${styles.collapse}`} id="navbarNav">
          <ul className={`navbar-nav ms-auto ${styles.nav} p-2 gap-5 d-flex justify-content-between`}>
            <li className={`nav-item ${styles.navItem} ${styles.selected}`}>
              <Side fir="Portfolio" />
            </li>
            <li className={`nav-item ${styles.navItem} ${styles.nselected}`}>
              <Side sec="About" />
            </li>
            <li className={`nav-item ${styles.navItem} ${styles.nselected}`}>
              <Side sec="Contact" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
