import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Import external CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState("");

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("adminLoggedIn"));
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg bg-dark border-bottom border-body ${isOpen ? "open" : ""}`}>
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <img src="/assests/logo.jpeg" alt="Logo" />
          G.C 2.0
        </Link>

        {/* Toggle Button for Small Screens */}
        <button className="navbar-toggler" onClick={() => setIsOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link active" to="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="nav-link active" to="/results">
                Results
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/points-table">
                Points Table
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/team">
                Meet the Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="https://docs.google.com/document/d/1AGj8LifA9gSygQsDY0wWllNdyTcvbmGa/edit?usp=sharing"
              >
                RuleBook
              </Link>
            </li>
            {isLoggedIn === "true" ? <li className="nav-item">
              <button
                className="nav-link active"
                onClick={localStorage.removeItem("adminLoggedIn")}
              >
                Logout
              </button>
            </li> : <></>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
