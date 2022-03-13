import React, { useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const handleActiveness = () => {
    var place = window.location.pathname
    var element1 = document.getElementById("achievements");
    var element2 = document.getElementById("introduction");
    var element3 = document.getElementById("projects");
    var element4 = document.getElementById("skills");
    var element5 = document.getElementById("contact");
    var element6 = document.getElementById("education");

    if(place==='/achievements'){
      element1.classList.add("onactivated"); 
      element2.classList.remove("onactivated"); 
      element3.classList.remove("onactivated"); 
      element4.classList.remove("onactivated");
      element5.classList.remove("onactivated"); 
      element6.classList.remove("onactivated");
    }else if(place==='/portfolio'){
      element1.classList.remove("onactivated"); 
      element2.classList.add("onactivated"); 
      element3.classList.remove("onactivated"); 
      element4.classList.remove("onactivated");
      element5.classList.remove("onactivated"); 
      element6.classList.remove("onactivated");
    }else if(place==='/projects'){
      element1.classList.remove("onactivated"); 
      element2.classList.remove("onactivated"); 
      element3.classList.add("onactivated"); 
      element4.classList.remove("onactivated");
      element5.classList.remove("onactivated"); 
      element6.classList.remove("onactivated");
    }else if(place==='/skills'){
      element1.classList.remove("onactivated"); 
      element2.classList.remove("onactivated"); 
      element3.classList.remove("onactivated"); 
      element4.classList.add("onactivated");
      element5.classList.remove("onactivated"); 
      element6.classList.remove("onactivated");
    }else if(place==='/contact'){
      element1.classList.remove("onactivated"); 
      element2.classList.remove("onactivated"); 
      element3.classList.remove("onactivated"); 
      element4.classList.remove("onactivated");
      element5.classList.add("onactivated"); 
      element6.classList.remove("onactivated");
    }else if(place=='/education'){
      element1.classList.remove("onactivated"); 
      element2.classList.remove("onactivated"); 
      element3.classList.remove("onactivated"); 
      element4.classList.remove("onactivated");
      element5.classList.remove("onactivated"); 
      element6.classList.add("onactivated");
    }
  }

  return (
    <div style={{width: "100vw", height:"10vh", minHeight: "54px" }}>
      <nav
        className="navbar navbar-dark bg-dark fixed-top"
        style={{ height: "10vh", minHeight: "54px" }}
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
            onClick={handleActiveness}
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
                <li className="nav-item" onClick={handleActiveness}>
                  <Link to="/portfolio" className="nav-link tagcol" id="introduction">
                    Introduction
                  </Link>
                </li>
                <Link to="/education" className="nav-link tagcol" id="education">
                    Education
                  </Link>
                <li className="nav-item" onClick={handleActiveness}>
                  <Link to="/achievements" className="nav-link tagcol" id="achievements">
                    Achievements & Work Exp
                  </Link>
                </li>
                <li className="nav-item" onClick={handleActiveness}>
                  <Link to="/skills" className="nav-link tagcol" id="skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item" onClick={handleActiveness}>
                  <Link to="/projects" className="nav-link tagcol" id="projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item" onClick={handleActiveness}>
                  <Link to="/contact" className="nav-link tagcol" id="contact">
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
