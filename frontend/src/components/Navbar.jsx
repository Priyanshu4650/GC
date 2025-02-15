import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" />
          <p className="navbar-brand">General Championship</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  <p className="nav-link active">Home</p>
                </Link> */}
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" to="/events">
                  <p className="nav-link active">Events</p>
                </Link> */}
                <a className="nav-link active" href="/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" to="/points-table"> */}
                {/* <p className="nav-link active">Points Table</p> */}
                {/* </Link> */}
                <a className="nav-link active" href="/points-table">
                  Points Table
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" to="/team"> */}
                {/* <p className="nav-link active">Meet The Team</p> */}
                {/* </Link> */}
                <a className="nav-link active" href="/team">
                  Meet the Team
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" to="#"> */}
                {/* <p className="nav-link active">RuleBook</p> */}
                {/* </Link> */}
                <a className="nav-link active" href="https://docs.google.com/document/d/1AGj8LifA9gSygQsDY0wWllNdyTcvbmGa/edit?usp=sharing&ouid=110758014801847889834&rtpof=true&sd=true">
                  RuleBook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
