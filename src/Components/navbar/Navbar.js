import React, { useState } from "react";
import "./style.css";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav
        style={{ zIndex: "1", backgroundColor: "rgb(16 24 255 / 49%)" }}
        className="navbar navbar-expand-lg navbar-light w-100"
      >
        <div className="container">
          <a
            className="navbar-brand ml-lg-5"
            href="#"
            style={{ color: "white"}}
            className="navBar_webxis"
          >
            <strong>webxis</strong>
          </a>
          <button
            onClick={() => setShow((prev) => !prev)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul
              className="navbar-nav m-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <a
                  className="nav-link "
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <strong>We Help</strong>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <strong>How We Work</strong>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <strong>Team & Jobs</strong>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <strong>Contact</strong>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "white" }}
                >
                  <strong>Blog</strong>{" "}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                class="btn btn-outline-success contact_btn"
                type="submit"
                style={{ color: "white"}}
              >
                <strong>Contact Us</strong>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
