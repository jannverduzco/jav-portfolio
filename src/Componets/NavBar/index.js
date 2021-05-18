import React from "react";
import "./style.css";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ReactBootStrap.Navbar
        className="navigationBar"
        bg=""
        expand="lg"
        variant="light"
      >
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link>
              <Link
                to="#home"
                className={
                  window.location.pathname === "#home"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link>
              <Link
                to="#about"
                className={
                  window.location.pathname === "#about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About
              </Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link>
              <Link
                to="#projects"
                className={
                  window.location.pathname === "#projects"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Projects
              </Link>
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link>
              <Link
                to="#contact"
                className={
                  window.location.pathname === "#contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default NavBar;
