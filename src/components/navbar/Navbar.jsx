import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ height: "10vh", width: "100vw" }}>
      <nav
        className="navbar navbar-dark bg-dark fixed-top"
        style={{ height: "10vh" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand siddharth" href="#">
            SIDDHARTH
          </a>
          <button
            className="navbar-toggler toggling"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end canvus-bgcol"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title h5-navigate tagcol"
                id="offcanvasNavbarLabel"
              >
                Navigate
              </h5>
              <button
                type="button"
                className="btn-close text-reset close-icon"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link tagcol">
                    Introduction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/achievements" className="nav-link tagcol">
                    Achievements
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/skills" className="nav-link tagcol">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link tagcol">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
